---
title: 一次h5开发踩坑记录
description: 这个h5开发时间是在国庆前两天，通过比较短的时间完成开发、设计稿还原以及上线。在这记一下踩过的一些小坑或者说是小技巧。
keywords: h5,踩坑,vue,vux
labels: ['前端']
date: 2018-10-15
---

### 时间
这个h5开发时间是在国庆前两天，通过比较短的时间完成开发、设计稿还原以及上线。在这记一下踩过的一些小坑或者说是小技巧。

### 使用框架

原本想直接了当用jQuery，毕竟用jQuery开发是真的快而且紧急情况可控。缺点是写起来会比较乱，维护也比较麻烦。但最后还是放弃，想尝试新的技术。最后试用了几套框架|库后，决定使用vux进行编写。
<!--more-->
### Vux
![tim 20181015093748](https://user-images.githubusercontent.com/21136420/48887191-5af85100-ee69-11e8-84e9-fc534223e75b.png)

使用原因：  

1. 使用vue-cli构建，几乎不用配置其余东西，内建命令让开发和打包生产版十分便捷。
2. vux有大量组件而且github上有非常多的issue记录，遇到问题可以快速定位解决。
3. vue生态给力，写起来舒舒服服。

### 主要坑

由于第一次用vux写h5，难免会遇到不少问题，不仅是框架本身的问题，还有其他业务上需要攻克的问题。就记录下踩过的坑：

- background-image在部署的时候路径不对。

修改vue-cli的build文件夹下的utils.js为如下：
![util](https://user-images.githubusercontent.com/21136420/48887225-7b281000-ee69-11e8-85a0-6e465667d9c4.png)

这样在 CSS 中：background-image: url("./assets/bg.jpg")，不管是在开发环境下还是在生产环境下，背景图都可以读出来

- 怎么生成图片并在微信端支持长按保存图片？  

以前也做过类似的，但没做过微信支持长按保存图片的。首先当然是要用到将html转为canvas然后再考虑转为图片。

1. 库：[html2canvas](https://html2canvas.hertzen.com/documentation)
2. 用法非常简单，指定挂载的元素进行转化。

```javascript
html2canvas(document.body).then((canvas) => {
    console.log(canvas);    // 这个是生成的canvas
    const base64Code = canvas.toDataURL("image/png");    //将生成的canvas通过api`toDataURL`转为base64格式图片。
});
```

- 怎么保存图片？

不是已经生成图片了吗？生成就可以可以保存了。没错，但是业务问题，在生成的图片上还要包含可点击的按钮和一个超链接。可以想到，可以将按钮和超链接定位到生成的图片上。可是存在这样的问题，不同的移动端呈现的结果可能不一致，这会直接导致页面显示出现问题，进而影响使用体验。这种覆盖的想法最后放弃了。

最后的做法：将生成的图片的透明度设置为0覆盖到原本要渲染的元素上，然后提高可点击按钮的层级。
![tim 20181015100607](https://user-images.githubusercontent.com/21136420/48887259-95fa8480-ee69-11e8-8564-ddbccc8f1e26.png)

- 存在无法分享到朋友圈的问题

微信浏览器唤起的分享菜单，存在点击分享到朋友圈出现卡死问题。
排查过程： 在页面操作第一步和第二步都不会有这个问题，在生成图片的第三步就出现无法分享的问题。在想是不是生成图片太大了导致太卡顿了？在开发调试过程，打开vue开发工具查看第三步data的时候，发现非常卡顿。这样就可以认定是图片造成的卡顿了。

最后找到的原因：canvas生成的base64编码的图片码十分长，直接导致vue处理的时候出现卡顿严重进而影响页面分享效果。最后的解决方案：将base64转为file上传，最后展示返回的url图片。
```javascript
  const base64Code = canvas.toDataURL("image/png")
  // 去掉url的头，并转换为byte。以下步骤生成JavaScript blob文件
  const bytes = window.atob(base64Code.split(',')[1])
  const ab = new ArrayBuffer(bytes.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  let files = self.blobToFile(new Blob([ab], { type: 'png' }), 'post')
  let formData = new FormData()
  formData.append("file", files, `myPost-${new Date().getTime()}.png`);
  self.$http.post(config.fileUploadURL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then (uploadRes => {
    if (uploadRes.data.code === 200) {
      self.imageBase = uploadRes.data.url
    }
  })
```
```javascript
  // blob图片转为文件的函数
  blobToFile (theBlob, fileName){
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  }
```
### 成品
虽然国庆过了，但是还是贴出来哈哈。
[活动](http://xiaolu.ybj.com/wechat/html/gqyx/index.html)