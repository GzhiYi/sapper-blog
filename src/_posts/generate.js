const compile = require('./config')
const chokidar = require('chokidar')

const watcher = chokidar.watch('./')
watcher
	.on('all', () => {
		compile()
	})