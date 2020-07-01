---
title: ES6 Module语法小结
description: ES6 Module语法小结
keywords: es6,ES6,module
labels: ['前端']
date: 2018-12-12
---


## `export`

1. 输出变量。

```javascript
export const name = 'GzhiYi';
export const job = 'Frontend';
```
以上可简写（荐）：
```javascript
const name = 'GzhiYi';
const job = 'Frontend';

export { name, job };
```
2. 输出函数或者类`class`。

```javascript
export function exportMe () {}
export class exportMeToo {}
```

3. 关键字`as`重命名输出。

```javascript
const name = 'GzhiYi';
const job = 'Frontend';

export {
   name as changeName,
   job as changeJob  
};
```

## `import`

1. 导入`export`输出的接口。

```javascript
import { name, job } from 'filePath';
// import 进来的变量均是readOnly，也不建议改写引入的其它类型数据。
```
2. 关键字`as`重命名输入。

```javascript
import { name as changName } from 'filePath';
```

## 整体引入

```javascript
// 假设demo.js文件有如下内容
function funA () {}
function funB () {}

export { funA, funB };

// 平常加载
import { funA, funB } from './demo';

// 整体引入
import * as allFun from './demo';
allFun.funA();
allFun.funB();
```

## `export defalut` 指定默认输出

```javascript
// demo.js
export default function () {};

// 引入
import funName from 'demo'; 
// 不需要知道封装demo.js包含的函数名，import后无需接大括号，因为默认输出的只有一个。
```
