const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')
const marked = require('marked')
const hljs = require("highlight.js")
marked.setOptions({
	renderer: new marked.Renderer(),
	highlight: function (code, language) {
		const validLanguage = hljs.getLanguage(language) ? language : "plaintext"
		return hljs.highlight(validLanguage, code).value
	},
	pedantic: false,
	gfm: true,
	breaks: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	xhtml: false,
})

// 遍历目录后返回目录所有文件
const getAllFiles = function (dirPath, arrayOfFiles) {
	files = fs.readdirSync(dirPath)
	arrayOfFiles = arrayOfFiles || []
	files.forEach(function (file) {
		if (fs.statSync(dirPath + "/" + file).isDirectory()) {
			arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
		} else {
			arrayOfFiles.push(path.join(dirPath, "/", file))
		}
	})
	return arrayOfFiles
}

const compile = () => {
	try {
		const dirs = getAllFiles('./')
		const inPosts = []
		for (let fileName of dirs) {
			if (/.md/.test(fileName)) {
				const fileData = fs.readFileSync(`./${fileName}`, 'utf-8')
				inPosts.push({
					title: fileName,
					path: fileName.split('.')[0],
					slug: fileName.replace('/', '_'),
					html: marked(fileData)
				})
			}
		}
		inPosts.forEach(post => {
			post.html = post.html.replace(/^\t{3}/gm, '');
		});
		const outPutContent = `export default ${JSON.stringify(inPosts)}`
		fs.writeFile('../routes/blog/_posts.js', outPutContent, err => {
			if (err) return console.log('生成post失败', err)
			console.log('已生成_posts.js')
		})
	} catch (error) {
		console.error('error', error)
	}
}
const watcher = chokidar.watch('./')
watcher
	.on('all', () => {
		compile()
	})