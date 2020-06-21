export default [{"title":"2020-06/build-blog.md","path":"2020-06/build-blog","slug":"2020-06_build-blog","html":"<h1 id=\"用sapper构建一个博客\">用sapper构建一个博客</h1>\n<p>发现自己好久没有写博客了。之前在github开了一个仓库，在仓库的<a href=\"https://github.com/GzhiYi/blog/issues\">issue区</a>写一些内容。issue区体验挺好的，可以refer上项目代码，也可以追加评论。但我想自己写一个博客，不需要很多花里胡哨的功能，只对内容专注，极大的好处是，可以随心所欲的编写自己喜欢的页面样式。刚好最近有接触了下<a href=\"https://svelte.dev/\">svelte</a>，就顺带的用<a href=\"https://sapper.svelte.dev/\">sapper</a>写一个静态页面。</p>\n<p>实现需要用到的知识点/技术：</p>\n<ol>\n<li>svelte</li>\n<li>sapper</li>\n<li>tailwindcss</li>\n<li>typescript</li>\n</ol>\n<p>后面两点非必须，可以根据自己需要进行增减。</p>\n<h2 id=\"思路\">思路</h2>\n<p>整体的思路比较简单。</p>\n<p>sapper支持export出静态文件，我只需要将静态文件部署到一个静态站点，首选的就是github pages。sapper导出export有一个好处：</p>\n<blockquote>\n<p>Static doesn&#39;t mean non-interactive — your Svelte components work exactly as they do normally, and you still get all the benefits of client-side routing and prefetching.</p>\n</blockquote>\n<p>sapper默认的template就是一个blog，这不是刚好可以拿来起手嘛！但默认的template的 blog内容是固定的数据，大致内容是一个js文件，export一个blog的array。</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> [\n  {\n    <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'2020-06/build-blog.md'</span>,\n    <span class=\"hljs-attr\">slug</span>: <span class=\"hljs-string\">'2020-06_build-blog'</span>, <span class=\"hljs-comment\">// 生成的路由路径</span>\n    <span class=\"hljs-attr\">html</span>: <span class=\"hljs-string\">'&lt;h1 id=\\\"用sapper构建一个博客\\\"&gt;用sapper构建一个博客&lt;/h1&gt;'</span>\n  }\n]</code></pre>\n<p>在sapper export之后，可以在<code>__sapper__/export/blog</code>看到生成html静态文件。也就意味着最后需要部署到github pages的目录，就是<code>__sapper__</code>目录啦。</p>\n<p><strong>可如果要写博客，那肯定也优先选择Markdown。</strong></p>\n<p>所以需要解决的也就是将Markdown文件转为上面提到的js文件。</p>\n<h2 id=\"将markdown转为js文件\">将Markdown转为js文件</h2>\n<p>需要用到<a href=\"https://github.com/markedjs/marked\">Markedjs</a>。</p>\n<p>使用也是简单粗暴：</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs-keyword\">const</span> marked = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'marked'</span>)\nmarked.setOptions({\n  <span class=\"hljs-attr\">renderer</span>: <span class=\"hljs-keyword\">new</span> marked.Renderer(),\n  <span class=\"hljs-attr\">highlight</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">code, language</span>) </span>{\n    <span class=\"hljs-keyword\">const</span> hljs = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'highlight.js'</span>)\n    <span class=\"hljs-keyword\">const</span> validLanguage = hljs.getLanguage(language) ? language : <span class=\"hljs-string\">'plaintext'</span>\n    <span class=\"hljs-keyword\">return</span> hljs.highlight(validLanguage, code).value\n  },\n  <span class=\"hljs-comment\">// ...(more options)</span>\n});\nmarked(markdownString)</code></pre>\n<p>例如markdownString为：</p>\n<pre><code>*hello world*</code></pre>\n<p>将会被转为：</p>\n<pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">em</span>&gt;</span>hello world<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">em</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span></code></pre>\n<p>知道用法之后，只需要通过fs文件操作，将目标的Markdown文件全部push进一个数组，最后将数组写入一个js文件。</p>\n<h2 id=\"读取markdown并写入文件\">读取Markdown并写入文件</h2>\n<p>node对操作文件提供了<code>readir</code>、<code>readFile</code>、<code>writeFile</code>等函数。</p>\n<p>其中核心的处理逻辑如下：</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs-comment\">// 获取所有文件</span>\n<span class=\"hljs-keyword\">const</span> getAllFiles = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">dirPath, arrayOfFiles</span>) </span>{\n    files = fs.readdirSync(dirPath)\n    arrayOfFiles = arrayOfFiles || []\n    files.forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">file</span>) </span>{\n        <span class=\"hljs-keyword\">if</span> (fs.statSync(dirPath + <span class=\"hljs-string\">\"/\"</span> + file).isDirectory()) {\n            arrayOfFiles = getAllFiles(dirPath + <span class=\"hljs-string\">\"/\"</span> + file, arrayOfFiles)\n        } <span class=\"hljs-keyword\">else</span> {\n            arrayOfFiles.push(path.join(dirPath, <span class=\"hljs-string\">\"/\"</span>, file))\n        }\n    })\n    <span class=\"hljs-keyword\">return</span> arrayOfFiles\n}\n<span class=\"hljs-comment\">// 将markdown转为js文件</span>\n<span class=\"hljs-keyword\">const</span> compile = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    <span class=\"hljs-keyword\">try</span> {\n        <span class=\"hljs-keyword\">const</span> dirs = getAllFiles(<span class=\"hljs-string\">'./'</span>) <span class=\"hljs-comment\">// 读取所有文件</span>\n        <span class=\"hljs-keyword\">const</span> inPosts = [] <span class=\"hljs-comment\">// 文章数组</span>\n        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> fileName <span class=\"hljs-keyword\">of</span> dirs) {\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-regexp\">/.md/</span>.test(fileName)) {\n                <span class=\"hljs-keyword\">const</span> fileData = fs.readFileSync(<span class=\"hljs-string\">`./<span class=\"hljs-subst\">${fileName}</span>`</span>, <span class=\"hljs-string\">'utf-8'</span>) <span class=\"hljs-comment\">// markdown内容</span>\n                <span class=\"hljs-keyword\">const</span> fmData = fm(fileData) <span class=\"hljs-comment\">// 此处可以忽略fm（fm是处理markdown front matter的，可有可无）</span>\n                <span class=\"hljs-keyword\">const</span> rmSuffix = fileName.split(<span class=\"hljs-string\">'.'</span>)[<span class=\"hljs-number\">0</span>] <span class=\"hljs-comment\">// 移除文件名后缀</span>\n                inPosts.push({\n                    <span class=\"hljs-attr\">title</span>: fileName,\n                    <span class=\"hljs-attr\">path</span>: rmSuffix,\n                    <span class=\"hljs-attr\">slug</span>: rmSuffix.replace(<span class=\"hljs-string\">'/'</span>, <span class=\"hljs-string\">'_'</span>),\n                    <span class=\"hljs-attr\">html</span>: marked(fmData.body),\n                    fmData\n                })\n            }\n        }\n        inPosts.forEach(<span class=\"hljs-function\"><span class=\"hljs-params\">post</span> =&gt;</span> {\n            post.html = post.html.replace(<span class=\"hljs-regexp\">/^\\t{3}/gm</span>, <span class=\"hljs-string\">''</span>);\n        });\n        <span class=\"hljs-keyword\">const</span> outPutContent = <span class=\"hljs-string\">`export default <span class=\"hljs-subst\">${<span class=\"hljs-built_in\">JSON</span>.stringify(inPosts)}</span>`</span>\n        fs.writeFile(<span class=\"hljs-string\">'../routes/blog/_posts.js'</span>, outPutContent, err =&gt; {\n            <span class=\"hljs-keyword\">if</span> (err) <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'生成post失败'</span>, err)\n            <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'已生成_posts.js'</span>)\n        })\n    } <span class=\"hljs-keyword\">catch</span> (error) {\n        <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'error'</span>, error)\n    }\n}\n<span class=\"hljs-keyword\">const</span> watcher = chokidar.watch(<span class=\"hljs-string\">'./'</span>)\nwatcher\n    .on(<span class=\"hljs-string\">'all'</span>, () =&gt; {\n        compile()\n    })</code></pre>\n<h1 id=\"部署到github-pages\">部署到github pages</h1>\n<p>对于sapper，执行export命令生成静态文件。</p>\n<pre><code class=\"language-bash\">npm run <span class=\"hljs-built_in\">export</span></code></pre>\n<p>将<code>__sapper__/export</code>推送到仓库的gh-pages分支。</p>\n<pre><code class=\"language-bash\">git subtree push --prefix __sapper__/<span class=\"hljs-built_in\">export</span> origin gh-pages</code></pre>\n<p>最后在仓库设置出将gh-pages分支设置为部署分支就好了。</p>\n<p>以上完成了从写Markdown到可以看到文章，后续页面的编写就可以随心所欲啦！</p>\n","fmData":{"attributes":{"title":"用sapper构建一个博客","date":"2020-06-20T00:00:00.000Z"},"body":"# 用sapper构建一个博客\n\n发现自己好久没有写博客了。之前在github开了一个仓库，在仓库的[issue区](https://github.com/GzhiYi/blog/issues)写一些内容。issue区体验挺好的，可以refer上项目代码，也可以追加评论。但我想自己写一个博客，不需要很多花里胡哨的功能，只对内容专注，极大的好处是，可以随心所欲的编写自己喜欢的页面样式。刚好最近有接触了下[svelte](https://svelte.dev/)，就顺带的用[sapper](https://sapper.svelte.dev/)写一个静态页面。\n\n实现需要用到的知识点/技术：\n\n1. svelte\n2. sapper\n3. tailwindcss\n4. typescript\n\n后面两点非必须，可以根据自己需要进行增减。\n\n## 思路\n整体的思路比较简单。\n\nsapper支持export出静态文件，我只需要将静态文件部署到一个静态站点，首选的就是github pages。sapper导出export有一个好处：\n\n> Static doesn't mean non-interactive — your Svelte components work exactly as they do normally, and you still get all the benefits of client-side routing and prefetching.\n\nsapper默认的template就是一个blog，这不是刚好可以拿来起手嘛！但默认的template的 blog内容是固定的数据，大致内容是一个js文件，export一个blog的array。\n\n```javascript\nexport const [\n  {\n    title: '2020-06/build-blog.md',\n    slug: '2020-06_build-blog', // 生成的路由路径\n    html: '<h1 id=\\\"用sapper构建一个博客\\\">用sapper构建一个博客</h1>'\n  }\n]\n```\n\n在sapper export之后，可以在`__sapper__/export/blog`看到生成html静态文件。也就意味着最后需要部署到github pages的目录，就是`__sapper__`目录啦。\n\n**可如果要写博客，那肯定也优先选择Markdown。**\n\n所以需要解决的也就是将Markdown文件转为上面提到的js文件。\n\n## 将Markdown转为js文件\n\n需要用到[Markedjs](https://github.com/markedjs/marked)。\n\n使用也是简单粗暴：\n\n```javascript\nconst marked = require('marked')\nmarked.setOptions({\n  renderer: new marked.Renderer(),\n  highlight: function(code, language) {\n    const hljs = require('highlight.js')\n    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext'\n    return hljs.highlight(validLanguage, code).value\n  },\n  // ...(more options)\n});\nmarked(markdownString)\n```\n\n例如markdownString为：\n\n```\n*hello world*\n```\n\n将会被转为：\n\n```html\n<p><em>hello world</em></p>\n```\n\n知道用法之后，只需要通过fs文件操作，将目标的Markdown文件全部push进一个数组，最后将数组写入一个js文件。\n\n## 读取Markdown并写入文件\n\nnode对操作文件提供了`readir`、`readFile`、`writeFile`等函数。\n\n其中核心的处理逻辑如下：\n\n```javascript\n// 获取所有文件\nconst getAllFiles = function (dirPath, arrayOfFiles) {\n\tfiles = fs.readdirSync(dirPath)\n\tarrayOfFiles = arrayOfFiles || []\n\tfiles.forEach(function (file) {\n\t\tif (fs.statSync(dirPath + \"/\" + file).isDirectory()) {\n\t\t\tarrayOfFiles = getAllFiles(dirPath + \"/\" + file, arrayOfFiles)\n\t\t} else {\n\t\t\tarrayOfFiles.push(path.join(dirPath, \"/\", file))\n\t\t}\n\t})\n\treturn arrayOfFiles\n}\n// 将markdown转为js文件\nconst compile = () => {\n\ttry {\n\t\tconst dirs = getAllFiles('./') // 读取所有文件\n\t\tconst inPosts = [] // 文章数组\n\t\tfor (let fileName of dirs) {\n\t\t\tif (/.md/.test(fileName)) {\n\t\t\t\tconst fileData = fs.readFileSync(`./${fileName}`, 'utf-8') // markdown内容\n\t\t\t\tconst fmData = fm(fileData) // 此处可以忽略fm（fm是处理markdown front matter的，可有可无）\n\t\t\t\tconst rmSuffix = fileName.split('.')[0] // 移除文件名后缀\n\t\t\t\tinPosts.push({\n\t\t\t\t\ttitle: fileName,\n\t\t\t\t\tpath: rmSuffix,\n\t\t\t\t\tslug: rmSuffix.replace('/', '_'),\n\t\t\t\t\thtml: marked(fmData.body),\n\t\t\t\t\tfmData\n\t\t\t\t})\n\t\t\t}\n\t\t}\n\t\tinPosts.forEach(post => {\n\t\t\tpost.html = post.html.replace(/^\\t{3}/gm, '');\n\t\t});\n\t\tconst outPutContent = `export default ${JSON.stringify(inPosts)}`\n\t\tfs.writeFile('../routes/blog/_posts.js', outPutContent, err => {\n\t\t\tif (err) return console.log('生成post失败', err)\n\t\t\tconsole.log('已生成_posts.js')\n\t\t})\n\t} catch (error) {\n\t\tconsole.error('error', error)\n\t}\n}\nconst watcher = chokidar.watch('./')\nwatcher\n\t.on('all', () => {\n\t\tcompile()\n\t})\n```\n\n# 部署到github pages\n\n对于sapper，执行export命令生成静态文件。\n\n```bash\nnpm run export\n```\n\n将`__sapper__/export`推送到仓库的gh-pages分支。\n\n```bash\ngit subtree push --prefix __sapper__/export origin gh-pages\n```\n\n最后在仓库设置出将gh-pages分支设置为部署分支就好了。\n\n以上完成了从写Markdown到可以看到文章，后续页面的编写就可以随心所欲啦！","bodyBegin":6,"frontmatter":"title: 用sapper构建一个博客\ndate: 2020-06-20"}},{"title":"2020-06/eclipse.md","path":"2020-06/eclipse","slug":"2020-06_eclipse","html":"<h1 id=\"日环食\">日环食</h1>\n<p>或许是不留意，像日环食、日全食这样难得一见的新闻像是突然冒出来一样。今天遇上了10年一遇的日环食。</p>\n<p><img align=\"center\" style=\"width: 100%;\" data-zoomable src=\"https://i.loli.net/2020/06/21/zQfrTOo7ZENBGg6.jpg\" alt=\"IMG_6669.JPG\" ></p>\n<p>当然是不能用眼睛直视啦，不过我在的屋子刚好下午是看不到阳光，外加上兴趣也不是十分大（没有工具，手机也拍不到好，外面又很热很热），就没有特意跑到楼下去看了。倒是朋友圈和微博都有非常多的直播，看他们发的，其实也就够了。新闻也提到了可以用小孔成像原理，就是拿一个带小孔的“东西”放在阳光下就可以看到日食的样子。恰巧有人路过拍下下面有意思的画面。</p>\n<p><img align=\"center\" style=\"width: 100%;\" data-zoomable src=\"https://i.loli.net/2020/06/21/3y8KMzdDhmQWBtq.jpg\" alt=\"IMG_6668.JPG\" ></p>\n<p>也不是我现场看到，但如果这是日环食通过小孔成像体验的模样，就颇为奇妙了，奇妙的不仅仅是这一自然现象，还有的是大千世界无与伦比的恰巧带来奇妙的画面。</p>\n<h2 id=\"小思考\">小思考</h2>\n<p>自己也常常浮想联翩。就拿今天的日环食，我会想为啥星球都是如此的圆；为什么会有那么巧的情况，让太阳被某个星球所刚好阻挡住光线。《星际穿越》是我最喜欢的电影，对于浩瀚太空的探索，显得我们那么渺小，就像男主结尾疑惑是谁把空间放在那的，我也在想，所有的一切都是自然发生的吗？还是有更高的物质将我们赋予生命、时间、还有空间？恐怕人类从开始到结束，都不会知道。走出浮想，想想今天也是天气很好的一天，我总可以好好享受自然带来的乐趣，觉得人类到底也是幸运的。</p>\n","fmData":{"attributes":{"title":"日环食","date":"2020-06-21T00:00:00.000Z"},"body":"# 日环食\n\n或许是不留意，像日环食、日全食这样难得一见的新闻像是突然冒出来一样。今天遇上了10年一遇的日环食。\n\n\n\n![IMG_6669.JPG](https://i.loli.net/2020/06/21/zQfrTOo7ZENBGg6.jpg)\n\n当然是不能用眼睛直视啦，不过我在的屋子刚好下午是看不到阳光，外加上兴趣也不是十分大（没有工具，手机也拍不到好，外面又很热很热），就没有特意跑到楼下去看了。倒是朋友圈和微博都有非常多的直播，看他们发的，其实也就够了。新闻也提到了可以用小孔成像原理，就是拿一个带小孔的“东西”放在阳光下就可以看到日食的样子。恰巧有人路过拍下下面有意思的画面。\n\n![IMG_6668.JPG](https://i.loli.net/2020/06/21/3y8KMzdDhmQWBtq.jpg)\n\n也不是我现场看到，但如果这是日环食通过小孔成像体验的模样，就颇为奇妙了，奇妙的不仅仅是这一自然现象，还有的是大千世界无与伦比的恰巧带来奇妙的画面。\n\n## 小思考\n\n自己也常常浮想联翩。就拿今天的日环食，我会想为啥星球都是如此的圆；为什么会有那么巧的情况，让太阳被某个星球所刚好阻挡住光线。《星际穿越》是我最喜欢的电影，对于浩瀚太空的探索，显得我们那么渺小，就像男主结尾疑惑是谁把空间放在那的，我也在想，所有的一切都是自然发生的吗？还是有更高的物质将我们赋予生命、时间、还有空间？恐怕人类从开始到结束，都不会知道。走出浮想，想想今天也是天气很好的一天，我总可以好好享受自然带来的乐趣，觉得人类到底也是幸运的。","bodyBegin":6,"frontmatter":"title: 日环食\ndate: 2020-06-21"}}]