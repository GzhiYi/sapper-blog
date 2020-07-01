---
title: CodeReview
description: 公司能有CodeReview的实践是非常好的。它最终的作用是促进工程师日常代码交流和提升工程师的代码能力。
keywords: 代码,codeReview
labels: ['学习']
date: 2019-09-17
---

>There are about 15-20 common mistakes made by programmers.
> A checklist is a useful means of ensuring that common mistakes are identified.

公司能有CodeReview的实践是非常好的。它最终的作用是促进工程师日常代码交流和提升工程师的代码能力。

## 明确代码规范

无论前端还是后端，代码规范是很重要的。不应该把过多的CodeReview时间放在诸如代码空格、缩进等问题，这都是可以通过代码规范去约束的。各个开发人员都要尽力去写出符合公司代码规范的代码，减少CodeReview时间。

## CodeReview 检查项

有一个简单明确的检查项可以快速对代码进行检查，不用担心遗漏某些必要的项。以下的列表提供建议，可以按公司内要求进行优化添加等。

### 一般

- 代码是否符合预期的功能，逻辑是否正确。
- 所写的代码是否容易理解。
- 代码是否符合规定的编码规范。
- 是否有冗余或者重复编写的代码。
- 是否尽可能的模块化/组件化。
- 全局变量是否全局定义（可以快速修改不必多处查找遗漏）。
- 是否留下注释的代码（视情况保留，一般不要存在好些）。
- 循环是否正确设置了结束条件。
- 代码设置的变量命名是否符合语义，易于理解。

### 性能上

- 是否还有更好的能提升既有性能的有效方法。
- 是否有内置函数或者成熟的库/组件能替换已有代码。
- 是否已移除掉日志和debug代码。

### 安全上

- 输入类型的代码是否检查了类型、长度、提交格式等，后台是否对输入进行编码（encode）。（防xss）
- 使用的第三方库有无错误异常捕获处理。
- 容易出错的地方是否进行异常捕获处理。
- 代码是否对变量做了空值判断处理。

### 解释说明上

- 代码的作用是否有注释留下描述。
- 所有函数都做了注释吗？
- 有没对所有代码异常和边缘情况做好判断处理。
- 引入的第三方库/组件是否做了必要的用途和引入说明。
- 有没有不完整的代码？如果有，那代码可不可以删除或者标记TODO等？

### Reviewer && Author

这部分原文在：[戳](https://phauer.com/2018/code-review-guidelines/)

- **用I-Messages**

> You are not your code.

要知道 `You !== Your Code`。给代码review错误不是对人review错误，不要把人自身价值和人写的代码连接起来。每个人都是团队中有价值的一部分。  
在Author和Reviewer之间应该交换业务最好的实践、经验、一些踩坑点还有一些提示。  
Reviewer在代码反馈上，有一个小规则我觉得挺有意思的：用I-Messages代替I-Messages。

错误: “**你**写的这段代码存在黑魔法。”

正确: “这段代码**我**不是很理解哦。”

- **讨论对象是代码不是人呐**

只讨论代码可以增加review反馈的可接受度。

错误: “**你**写的这代码请求了多次接口，这会影响性能。”

正确: “**这段代码**触发多次请求了，应该会影响性能。”

-  **提问题**

好的方式提问题，让人更好的接受。

错误: “这变量就应该命名为UserId。”

正确: “如果这变量命名为UserId是不是好理解多了？”