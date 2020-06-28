---
title: 用firebase给静态博客页面增加点赞功能
description: 用firebase给静态博客页面增加点赞功能
keywords: firebase,like
labels: ['前端']
date: 2020-06-28
---

想给博客增加一个点赞功能。最后，看起来就是这样：

![like](https://i.loli.net/2020/06/28/Ej9in7gr5uNHIJO.jpg)

实现这个功能要考虑几个问题：

1. 没有服务器，接口怎么编写部署？
2. 博客没有登录，数据库设计的时候怎么识别用户唯一性。

## Firebase

对于firebase的介绍，最好是直接进入[主站](firebase.google.com)开通spark版尝试。

使用firebase，就可以很好的解决第一个问题。spark方案提供免费的空间支持，对于博客这种量级小，交互少的页面来说再适合不过了。

如果用过tx云的云开发，就可以知道，其实概念有些相似，甚至在云函数的编写上也有几分相似。

## fingerprintjs2

利用[fingerprintjs2](https://github.com/fingerprintjs/fingerprintjs2)，可以通过user agent等信息生成用户唯一的一个ID，虽然不能100%保证用户唯一性，但对于无需登录的博客而言，已经足够了。
生成指纹的主要用法：

```javascript
Fingerprint2.x64hash128(values.join(''), 31)
```

## 过程

整个过程，时间大部分花在云函数执行数据库操作语法上。以下前提是开通了firebase的spark方案，开通方式直接明了就不赘述啦。

### 控制台

需要在控制台创建你的一个项目，创建好项目之后再执行下面的步骤。

### 函数（functions）编写

相关代码可以查看：[blog-like](https://github.com/GzhiYi/blog-like/blob/master/functions/index.js)

1. 安装Firebase CLI工具以初始化函数仓库。

```bash
npm install -g firebase-tools
```
2. 登录

```bash
firebase login
```

3. 创建一个空目录，然后初始化这个目录，例如目录名为blog-like

```bash
mkdir blog-like && cd blog-like && firebase init
```

执行init命令后会提示选择新建项目的一些规则。（以下是规则过程）

`q: Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices.`
`a: 选择Firestore: Deploy rules and create indexes for Firestore以及Functions: Configure and deploy Cloud Functions`  

`q: Please select an option:`
`a: Use an existing project，随后选择在控制台创建的项目。`

随后几个按enter就好了。

4. 函数编写。

需要两个接口，一个是新增点赞接口，路由为：`newLike`，一个是获取点赞数据的接口，路由为：`getLikes`。

 - newLike。先判断该用户是否已经点过赞。需要存储的数据，文章标题、点赞时间、用户指纹。
 - getLikes。先获取该文章点赞总数，在判断用户是否已经点过赞。

有了以下基本代码：

点赞数据表：

```json
{
		id: 用户指纹，
  	likeTime：点赞时间，
  	postTitle：文章标题
}
```



newLike，创建点赞数据：

```javascript
db.collection('like')
  .where("postTitle", "==", request.body.title)
  .get()
  .then(res => {
  let isLike = false
  try {
    // 判断是否已经点赞过
    res.forEach(doc => {
      if (doc.id === request.body.id && !isLike) {
        isLike = true
      }
    })
    if (!isLike) {
      let docRef = db.collection('like').doc(params.id);
      docRef.set({
        postTitle: params.title,
        likeTime: new Date().toLocaleString()
      });
      response.send({
        data: 'like success!',
        code: 0
      })
    } else {
      response.send({
        data: '',
        message: 'like 过啦',
        code: 1
      })
    }
  } catch (error) {
    console.log('error', error)
  }
})
```

getLikes，获取点赞数据：

```javascript
db.collection('like')
  .where("postTitle", "==", title)
  .get()
  .then(res => {
  let isLike = false
  try {
    res.forEach(doc => {
      if (doc.id === id && !isLike) {
        isLike = true
      }
    })
  } catch (error) {
    console.log('error', error)
  }
  response.send({
    data: res.size,
    isLike,
    message: 'oooooooook',
    code: 0
  })
})
  .catch(error => {
  response.send({
    data: error,
    message: request.body,
    code: 1
  })
})
```

在函数编写之后，执行命令就可以部署到云端啦。

```bash
firebase deploy --only functions
```

## 用户端

在博客页面上生成用户唯一ID后用fetch请求点赞接口就可以了。

另外，跨域问题需要函数端用上cors处理。详细的都可以在[仓库](https://github.com/GzhiYi/blog-like)看到。

## 体验

最后说一下体验。整个开发过程比较愉快，花了点点时间查阅数据库操作语法。上线尝试访问，发现google的果然访问好慢！

你可以点击下面clap按钮试试，如果没有，说明网络问题，unreachable。