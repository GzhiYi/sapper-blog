---
title: lodash数组中chunk方法
description: lodash中chunk方法的使用，在业务中用到多少呢，怎么对数组使用chunk进行切割
keywords: lodash,chunk,array,数组,切割,源码分析,每天一个lodash函数
labels: [lodash]
date: 2021-07-15
---

lodash的chunk方法用于对数组进行按size切割。如果最后数组不满足size的长度，则剩余的部分会放到最后一个数组上。
使用：

```javascript
const arr = [1, 2, 3, 4, 5]
_.chunk(arr, 2) // [[1, 2], [3, 4], [5]] 
```

结果返回的是一个二维数组。在日常的使用上，个人觉得比较少。