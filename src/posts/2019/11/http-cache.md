---
title: Http缓存
description: Http缓存
keywords: http,缓存
labels: ['学习']
date: 2019-11-28
---

## 缓存相关头

### 响应头

- Expire。资源过期时间。
- Cache-Control。缓存控制字段，精确控制缓存策略。
- Last-Modified。资源最近修改时间。
- Etag。资源标识。

### 请求头

- Cache-Control。缓存控制字段，精确控制缓存策略。
- If-Modified-Since。资源最新修改时间。
- If-None-Match。缓存资源标识。

### 字段匹配

If-Modified-Since和Last-Modified
Etag和If-None-Match

## 浏览器和服务器约定资源过期时间

服务器和浏览器之间约定文件的过期时间，控制的字段为：Expires。在这个时间未到之前，浏览器对同一个文件不会向服务器发起请求。

**缺点：**Expire到期后，如果文件未进行过改动，浏览器还是会向服务器请求读取文件。

## 服务器告诉浏览器资源上次的修改时间（解决上面的问题）

服务器返回文件的时候，在响应头上增加一个最近修改时间（Last-Modified）。浏览器在Expires时间到之后，会向服务器发起文件请求，这时带上一个最近修改时间（If-Modified-Since = Last-Modified）。服务器在接受到请求之后，会拿这个时间和服务器上目标文件的上一次修改时间做对比：
- 相等。进行304跳转，不要读取服务器文件了，读取缓存就行了。
- 不相等。读取服务器上的文件。
**缺点：**
1. Expires过期时间浏览器断可以修改，这样会导致缓存不准确。
2. Last-Modified过期时间只能精确到秒。（一秒内可能多次改动，这样会造成两个可能的问题：文件一秒内改动多次，但还是通知浏览器读缓存。如果文件修改了，但内容不变，那就会去读服务器文件了。）

## 增加相对时间控制，引入Cache-Control

服务器在返回资源给浏览器的时候，会增加一个相对时间：Cache-Control：max-age=1000s。这个的意思是告诉浏览器，1000s内使用浏览器缓存的文件。

**优先级：** 
Cache-Control优先于Expires。有Cache-Control就以Cache-Control为准。

## 继续升级缓存机制

带上Etag-可以理解为文件的唯一Id，由服务器返回到浏览器上。
在有效期过后，带上一个等同于Etag值的If-None-Match请求头，比较后处理是否读取文件。

## 最后是我前端的一个技巧啦

由于上面那么多的缓存判断条件，都不能满足一个情况，既浏览器永远无法主动知道服务器的文件已经更新。那好：静态资源在请求链接上更新就行了。

```javascript
<script src="http://test.com/a.【hash值】.js"></script>
```