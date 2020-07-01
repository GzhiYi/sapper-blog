---
title: koa异步写文件遇到的小问题
description: 最近用koa写个微信小程序二维码生成接口，出现了一个小坑：由于小程序二维码生成接口返回的是二进制流，需要通过fs操作生成图片返回给前端下载。期间反复出现下载文件大小为0（零 / 大小未知）的情况。
keywords: koa,async,file
labels: ['前端']
date: 2018-12-13
---

![koa](https://github.com/koajs/koa/raw/master/docs/logo.png)
最近用koa写个微信小程序二维码生成接口，出现了一个小坑：由于小程序二维码生成接口返回的是二进制流，需要通过fs操作生成图片返回给前端下载。期间反复出现下载文件大小为0（零 / 大小未知）的情况。  

**主要生成二维码代码如下**

```javascript
// 其余代码省略
const writeS = fs.createWriteStream('qrcode.png')
await request({
  uri: `https://api.weixin.qq.com/wxa/getwxacode?access_token=${token}`,
  method: 'post',
  body: data,
  json: true
}).pipe(writeS)
// 其余代码省略
```
需要有个先后顺序问题，必须先等到文件写完后才能进行图片下载接口调用。处理方法是在前端调用生成二维码的接口，而接口的操作需要有个等待过程，即要在`createWriteStream`结束后**生成二维码接口**才返回数据。  

前端在接收到**生成二维码接口**返回数据后才调用下载二维码接口。  

koa端等待写文件结束后返回，这里koa要用promise在callback后触发返回数据：

```javascript
 ctx.body = await new Promise((resolve, reject) => {
    writeS.on('finish', function () {
      resolve({
        code: 1
      })
    })
  })
```
前端监听操作：

```javascript
if (res.data.code === 1) {
  window.open('图片下载地址')
}
```

具体接口代码（[查看](https://github.com/GzhiYi/wxqrcode-generater/blob/master/index.js)）