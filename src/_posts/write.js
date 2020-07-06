const fs = require('fs')
const config = require('./config')
const chokidar = require('chokidar')
const dayjs = require('dayjs')
const watcher = chokidar.watch('./')

// write default info to new markdown
const generateInfo = (event, path) => {
	if (event === 'add') {
		const fileData = fs.readFileSync(`./${path}`, 'utf-8')
		if(fileData === '') {
			// 新建了一个markdown文件
			const outPutContent =
			`---
title: 
description: 
keywords: 
labels: []
date: ${dayjs(new Date()).format('YYYY-MM-DD')}
---`
			fs.writeFile(path, outPutContent, err => {
				if (err) return console.log('填充文本失败', err)
			})
			console.log('you add new file', path)
		}
	}
}

watcher
	.on('all', (event, path) => {
		if(/md|MD/g.test(path)) {
			generateInfo(event, path)
		}
		config.compile()
	})