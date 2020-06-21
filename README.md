# 使用sapper构建的简约博客页面

[Demo](https://gzhiyi.top)

## 使用

```bash
git clone git@github.com:GzhiYi/sapper-blog.git
cd sapper-blog
npm install
```

将项目的.git文件夹删除，再推入自己的github远端repo。  
在github远端仓库新建一个分支为：gh-pages。


执行部署命令：

```bash
npm run deploy
```

在github远端仓库Github Pages设置中，将gh-pages分支设置为source。

打开链接就可以看到部署的页面了。

## 编写

文章路径为`src/_posts`，在此目录下，运行下面命令将监听markdown文件并生成`routes/blog/_posts.js`。如果项目已在运行的话，可以在本地实时查看文章情况。

```bash
node generate.js
```

后续会进行更新优化页面样式。

