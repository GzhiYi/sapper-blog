# 使用sapper构建的简约博客页面

[Demo](https://gzhiyi.top)

## 使用

```bash
git clone git@github.com:GzhiYi/sapper-blog.git
cd sapper-blog
npm install
npm run dev # 开启开发模式，会监听src/posts下markdown文件的变更
```

## 部署

执行部署命令：

```bash
npm run deploy # 通过git提交到main目录并触发github actions部署。部署完成推送使用的是bark，推送需要token，可以忽略。
```

1. 在github远端仓库新建一个分支为：gh-pages。
2. 如果需要编写个人内容，需要移除src/posts下的所有目录（不需要移除src/posts/render.js）。
3. 需要保持src/posts下的博客内容放在按日期命名的目录内，目录会对应生成路由
4. 在github远端仓库Github Pages设置中，将gh-pages分支设置为source。

打开链接就可以看到部署的页面了。
