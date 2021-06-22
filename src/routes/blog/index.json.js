import posts from './_posts.js'

const contents = JSON.stringify(posts.map(post => {
  const {
    title,
    description,
    keywords,
    labels,
    date,
    path,
    slug,
    html
  } = post
  return {
    title,
    slug,
    description,
    keywords,
    labels,
    date,
    path,
    html
  }
}))

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(contents)
}