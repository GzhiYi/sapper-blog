const fs = require('fs')
const path = require('path')
const pify = require('pify')
const chokidar = require('chokidar')
const marked = require('marked')
let posts = []
marked.setOptions({
	renderer: new marked.Renderer(),
	highlight: function (code, language) {
		const hljs = require("highlight.js")
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
const compile = () => {
	console.log('come in')
	try {
		const dirs = fs.readdirSync('./')
		const inPosts = []
		for (let fileName of dirs) {
			if (/.md/.test(fileName)) {
				const fileData = fs.readFileSync(`./${fileName}`, 'utf-8')
				inPosts.push({
					title: fileName,
					slug: fileName,
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