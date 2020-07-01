---
title: Element-ui table组件表头sticky
description: 不用js处理，css实现element-ui表头sticky。
keywords: element-ui,table,header,表头,sticky,position,overflow hidden
labels: ['前端']
date: 2020-05-29
---

element组件表头未支持sticky相关api。可以通过如下css处理：

```css
// 表头sticky
.el-table__footer-wrapper,
.el-table__header-wrapper {
  position: sticky;
  top: 48px;
  overflow: inherit !important;
  z-index: 99;
}
.el-table--small {
  overflow: inherit;
}
```

说明：

`position: sticky`如果没有效果，检查：

1. `top`、`right`、`left`或者`bottom`属性是否有设置。
2. 在table组件中设置层级，以免被遮挡。
3. sticky对象的祖先元素不能设置`overflow: hidden;`