---
title: 小程序egg后台简要文档
description: 如果不需要后端java或者其他语言支持，对于小型的小程序后台，可以使用eggjs框架快速搭建简要的数据后台。
keywords: mp,小程序,eggjs,微信开发后台
labels: ['小程序']
date: 2019-06-06
---

如果不需要后端java或者其他语言支持，对于小型的小程序后台，可以使用eggjs框架快速搭建简要的数据后台。

如果未接触过node编写接口，首先还是需要基本过一下[egg官方文档](https://eggjs.org/zh-cn/intro/)，至少得把快速入门看完。

不会从头开始把每一步都详细写下来，只针对微信对接的一些处理列出来。

## 数据库

使用mongo，示例通过[egg-mongoose](https://github.com/eggjs/egg-mongoose)进行连接处理。

安装插件后，在`/config/plugin.js`进行基本配置：

```javascript
mongoose: {
  enable: true,
  package: 'egg-mongoose'
}
```

在`/config/config.default.js`文件中配置mongodb的连接（保证本地测试环境数据库连接好）：

```javascript
// connect mongo
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/fulishe',
      options: {},
    }
  }
```

在`/app/models`文件夹编写相关的model，在程序运行时会自动在mongo上创建对应的表。也可以优先创建好数据库和表设计等。

## 编写接口

在`controller`写主要的业务逻辑，接受接口请求参数并返回。
对于入参，需要进行验证的可以做验证处理，需要处理返回结果，即使请求出错也不要返回非200的状态码。
可以将处理结果设置为一个函数，如：

```javascript
// data: 返回给前端的数据，code: 状态，1为成功，0为失败，message：状态信息
formatResponse: function (data, code, message) {
  return {
    code,
    data,
    message
  }
}
```

!> 为避免出现出现问题而导致程序中断，最好在每一个容易出现问题的地方进行`try catch`将异常抛出并返回到前端。

在`service`编写数据库操作函数等，通过在`controller`进行调用，统一管理数据库数据进出。
注意在数据新增的时候需要进行`save`操作：

```javascript
const addUser = await this.ctx.model.Users(data)
addUser.save() // 不要遗漏
```

相关的增删改查操作，需要直接点的可以看仓库`app/service`下的写法。

## 小程序接口相关

以下是eggjs对小程序包括获取openId、获取unionId、获取手机号码、判断用户是否关注公众号、客服信息发送进行编写说明。  
如果某个对象不知道是什么，一般都是可以根据名字找到对于的js文件或者通过npm引入，不再表述引入什么了。

### 获取openId

参数说明：

- APPID： 小程序的appId
- SECRET： 小程序的secret，跟appId在同一个地方能找到
- CODE：小程序在前端通过wx.login()获取的jscode

```javascript
const openIdRes = await rp(`https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${CODE}&grant_type=authorization_code`)
const openId = JSON.parse(openIdRes).openId // 在处理错误判断后，返回的数据是json字符串，需要转化
```

### 获取unionId

unionId，属于微信端通用的账号唯一标识，举个例子就是同一个微信号，唯一对应一个unionId。而在每一个小程序上，用户openId都不一样。可以用于判断在小程序上的用户是否关注公众号等。

在第一个获取`openId`的时候，会返回`openId`以及`session_key`，通过小程序前端传过来的`encryptedData`以及`iv`就可以拿到`unionId`。

参数说明：

- APPID： 小程序的appId
- sessionKey：获取openId的时候，一并返回了sessionKey
- encryptedData：小程序在前端通过获取用户信息返回
- iv：小程序在前端通过获取用户信息返回

```javascript
const pc = new WXBizDataCrypt(APPID, sessionKey)
const data = pc.decryptData(encryptedData, iv)
const unionId = data.unionId
```

### 获取手机号码

获取手机号码的步骤跟获取unionId一样。

只需要注意的是，`encryptedData`、`iv`是在小程序端通过`getPhoneNumber`获取。

### 判断用户是否关注公众号

这里单独在小程序后台无法判断。需要在对于的公众号后台提供一个接口用于判断该unionId是否已经关注了公众号。

### 客服信息发送

在小程序开发设置中配置消息推送。

配置参考： 

参数 | 值 |  备注  
-|-|-
URL(服务器地址) | https://*.*.com/message/check | 微信那边与你服务器通信的接口 |
Token(令牌) | isToken | 自定义 |
EncodingAESKey(消息加密密钥) | ****** | 填写那可以自动生成 |
消息加密方式 | 	兼容模式 | 涉及信息安全 |
数据格式 | 	JSON | 一般是这个吧 |

在`controller`层编写一个`get`接口，对应`/message/check`，用以给微信进行服务器验证。
完整验证函数接口可如下：

```javascript
async index() {
  const { ctx } = this
  // 1.获取微信服务器Get请求的参数 signature、timestamp、nonce、echostr
  const {
    signature,
    timestamp,
    nonce,
    echostr
  } = ctx.query

  // 2.将token、timestamp、nonce三个参数进行字典序排序
  let array = ['线上配置的令牌', timestamp, nonce]
  array.sort() // JavaScript sort函数就是字典序排序的

  // 3.将三个参数字符串拼接成一个字符串进行sha1加密
  const tempStr = array.join('')
  const hashCode = crypto.createHash('sha1') //创建加密类型
  const resultCode = hashCode.update(tempStr, 'utf8').digest('hex')

  // 4.开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
  if (resultCode === signature) {
    ctx.body = echostr
  } else {
    // 非微信服务器请求
    ctx.body = format.formatResponse({
      resultCode,
      req: ctx.query
    }, 0, '验证失败1')
  }
}
```

自动回复操作：
在`controller`层编写一个`post`接口，对应`/message/check`，用于自动回复。
完整处理自动回复接口：

```javascript
async handle() {
  const { ctx } = this
  const { FromUserName, MsgType, Content } = ctx.request.body // 这是从微信转发过来的用户发送的信息参数
  const { openid } = ctx.query
  // 获取accessToken
  const tokenRes = await rp(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${CONST.appId}&secret=${CONST.secret}`)
  if (!('errcode' in JSON.parse(tokenRes))) {
    if (MsgType === 'text') {
      const postData = {
        touser: openid,
        msgtype: "link",
        link: {
          title: '链接标题',
          description: '链接描述',
          url: '链接',
          thumb_url: '链接封面图'
        }
      }
      const sendRes = await rp({
        uri: `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${JSON.parse(tokenRes).access_token}`,
        method: 'post',
        body: postData,
        json: true
      })
    }
  }
  ctx.body = 'success'
}
```
!> 注意：需要在自动回复的最后返回`success`，否则会在聊天窗口看到提示：`该小程序提供的服务出现故障，请稍后再试`
