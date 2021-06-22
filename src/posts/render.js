/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const fm = require('front-matter')
const dayjs = require('dayjs')
const marked = require('marked')

const renderer = new marked.Renderer()

renderer.image = function (
  href,
  title,
  text
) {
  let renderSize = ''
  if (title) {
    let size= title.split('x')
    if (size[1]) {
      renderSize = `width=${size[0]} height=${size[1]}`
    } else {
      renderSize = `width=${size[0]}`
    }
  } else {
    renderSize = ''
  }
  return `<img align="center" style="width: 100%;" data-zoomable src="${href}" alt="${text}" ${renderSize}>`
}
renderer.link = function (
  href,
  title,
  text
) {
  let link = marked.Renderer.prototype.link.call(this, href, title, text)
  return link.replace('<a', '<a target=\'_blank\' ')
}
marked.setOptions({
  renderer,
  highlight: function (code) {
    const hljs = require('highlight.js')
    // const validLanguage = hljs.getLanguage(language) ? language : 'plaintext'
    return hljs.highlightAuto(code).value
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
  const files = fs.readdirSync(dirPath)
  arrayOfFiles = arrayOfFiles || []
  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file))
    }
  })
  return arrayOfFiles
}

const render = () => {
  try {
    const dirs = getAllFiles('src/posts')
    let posts = []
    for (let fileName of dirs) {
      if (/.md/.test(fileName)) {
        const fileData = fs.readFileSync(`./${fileName}`, 'utf-8')
        const fmData = fm(fileData)
        const { title, description, keywords, labels, date } = fmData.attributes
        const rmSuffix = fileName.replace(/src\/posts\//g, '')

        posts.push({
          title,
          description,
          keywords,
          labels,
          date: dayjs(date).format('YYYY-MM-DD'),
          path: rmSuffix,
          slug: rmSuffix.replace(/\//g, '_').replace('.md', ''),
          html: marked(fmData.body).replace(/^\t{3}/gm, '')
        })
      }
    }
    posts = posts.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1)
    const exportString = `export default ${JSON.stringify(posts)}`
    fs.writeFile('src/routes/blog/_posts.js', exportString, err => {
      if (err) return console.log('生成_posts.js失败', err)
      console.log('已生成_posts.js')
    })
  } catch (error) {
    console.error('error', error)
  }
}
module.exports = {
  getAllFiles,
  render
}