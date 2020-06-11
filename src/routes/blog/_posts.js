// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
// import posts from '../../markdown/posts'
const fs = require('fs')
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
const compile = async () => {
	console.log('come in')
	const dirs = await pify(fs.readdir)('./_posts')
	const inPosts = []
	for (let fileName of dirs) {
		if (/.md/.test(fileName)) {
			const fileData = await pify(fs.readFile)(`./_posts/${fileName}`, 'utf-8')
			inPosts.push({
				title: fileName,
				slug: fileName,
				html: marked(fileData)
			})
		}
	}
	console.log('inPosts', inPosts)
	return inPosts
}
const watcher = chokidar.watch('./_posts')
watcher
	.on('ready', () => {
		console.log('yes')
		posts = compile()
	})
	.on('change', () => {
		posts = compile()
	})
	.on('unlink', () => {
		posts = compile()
	})
console.log('posts', posts)
posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
