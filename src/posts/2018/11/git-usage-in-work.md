---
title: git在工作中的一些用处
description: git内容有非常多，如果要每个命令都去熟悉和记忆的话，我觉得是没有必要的，掌握基本的用法，在团队合作中能快速定位问题和解决才是重要的。
keywords: git,工作中,用处,git工作流,分支,git rebase,git merge
labels: ['学习']
date: 2018-11-28
---

![banner](https://images.vrm.cn/2018/11/26/banner.png)

本周四分享会主题：__git在工作中的一些用处__。  

git内容有非常多，如果要每个命令都去熟悉和记忆的话，我觉得是没有必要的，掌握基本的用法，在团队合作中能快速定位问题和解决才是重要的。**基本的概念不会多说**，都能在入门教程那些学习到。接下来会说下git在工作中比较常用的功能，会发现，其实git能做的事情还是非常多的。

### git在开发中常用的命令
__编辑和代码提交__

```bash
# 为git初始化一个代码库
git init

# 将目录的所有文件提交到暂存区
git add .

# 提交暂存区到代码仓库区，并添加提交信息
git commit -m "commit message"
```

__分支处理__

```bash

# 列出本地所有的分支
git branch

# 列出远程仓库的所有分支
git branch -r

# 列出仓库的所有分支（包含远端和本地分支）
git branch -a

# 切换到指定分支，并更新工作区
git checkout [branchName]

# 新建一个分支并切换到该分支
git checkout -b [branchName]

# 删除一个分支
git branch -d [branchName]

# 强制删除一个分支
git branch -D [branchName]
```

__查看状态信息__

```bash
# 查看变更的文件，可多用这个命令查看当前文件改动状态
git status

# 查看当前分支提交历史，可以得到加密的commit_id
git log

# 查看暂存区和工作区的对比
git diff
```

__同步远程仓库__

```bash
# 同步远程仓库的所有更新
git fetch [remote]

# 显示所有远程仓库
git remote -v

# 增加一个新的远程仓库，并定义一个远程仓库名，shortName常用origin，当然可自定义
git remote add [shortName] url

# 拉取远端分支，并与本地分支合并
git pull [remote] [branchName]

# 上传本地分支到远端
git push [remote] [branchName]
```

__撤销操作__

```bash
# 恢复暂存区的指定文件到工作区
git checkout [file]

# 恢复暂存区的所有文件到工作区
git checkout .

```

![image](https://user-images.githubusercontent.com/21136420/49006081-37a00f80-f1a3-11e8-982e-c02cd71c1495.png)

git工作中常用命令基本可以上图概括。
________

__其它常用的命令__
单独拿出来说是因为平常知道用的可能不会很多，但实际用起来会非常有用。

1. `git stash`

当你在工作的时候，累计了比较多的改动，但是突然间需要临时切换到其它分支工作，可是又不好把中途工作的内容提交，那怎么办？这时候git stash就有用了。

```bash
# 查看文件变更状态
git status

# 储藏变更，这时候会提示已储藏变更
git stash

# 当在其它分支工作完回到原来分支的时候，可以查看储藏列表
git stash list

# 恢复储藏，这时候文件变更就回来了，listNum为列表序号
git stash apply stash@{listNum}
```

2. `git rebase`

一般我们完成代码后，需要将分支的改动进行整合，会用到合并（merge）操作，但这不是唯一的方式，Rebase就是其中的代替方式。  
先来说说merge。我们在需要合并的时候，会有如下的两种基本情况： 

![情况1](https://images.vrm.cn/2018/11/27/starting-situation-fast-forward.gif)
其中一个分支没有新的改动，而另一个分支却有改动。这个时候进行整合的话，git仅仅只是添加所有改动的分支的新提交即可。

![情况2](https://images.vrm.cn/2018/11/27/starting-situation-merge-commit.gif)
第二种就是我们开发过程经常遇到的情况，两个分支都有不同的开发轨迹。为了完成合并，git会创建一个新的提交来涵括它们之间的差异，这就是整合提交。

有人不喜欢这个合并的方式，希望项目有一个单一的开发轨迹，在流程上是一条直线，不希望在开发历史记录上看到被分成过多个分支。这时候就可以用到rebase操作了。

我们还是看第一个例子：

![情况1](https://images.vrm.cn/2018/11/27/starting-situation-fast-forward.gif)
如果我们想合并分支B到A分支上，可以用到下面这个命令：

```bash
git rebase branchB
```

git会进行这样的操作：  
“撤销”所有分支A上与分支B开发分叉后的更改，这并不是真的checkout掉更改，后面还会用到。
![rebase1](https://images.vrm.cn/2018/11/27/rebase-step-1.gif)

然后它将整合分支B上的提交到A上，这要看，分支A和分支B就会像一条线一样。
![rebase2](https://images.vrm.cn/2018/11/27/rebase-step-2.gif)

最后，在分支A上的那些新的提交会被重新应用回来。
![rebase3](https://images.vrm.cn/2018/11/27/rebase-step-3.gif)

3. `git reset`和`git revert`

开发期间难免会有提交出错代码的情况，如何进行版本回退呢？git reset命令就派上用场了.  
- git reset 为重置提交，可以将版本回退到某一个commit记录上。git reset 命令后面是需要加2种参数的：–-hard 和 –-soft。这条命令默认情况下是 -–soft。  
__区别：__

默认参数 -soft,所有commit的修改都会退回到git暂存区。
参数--hard，所有commit的修改直接丢弃，小心用。

```bash
git reset --hard commit_id
git push origin [branchName] --force
```
当然如果--hard错了，也还有救，`git reflog`命令记录你的所有git操作，能获取到原有的移除掉的commit_id。

- git revert 为还原提交，可以将某个commit还原然后创建一个新的还原commit。字面意思已经很好理解了。比如：

```bash
# 某个commit的文件a增加两行文字

git revert commit_id

# 执行该命令后，还原了这个commit文件a的更改，新增一个revert的commit，更改为增加的两行文字被移除。
```

### git工作流

这里只说下最广泛应用的git工作流，也就是git flow。  
在开发的初期，我们定两个分支：

- __主分支master__
- __开发分支develop__

规定，master分支为版本发布的分支，提供上线的版本。develop分支为日常开发分支，存放最新的开发版本。一般的develop分支会切出如下的三个短期分支：

1. 功能分支（feature）
2. 修bug分支（hotfix或者fix）
3. 预发布分支（release）

**还有其它工作流？**

当然有！下面就继续说一个挺不错的工作流：  

> 功能分支工作流  

这个工作流的核心思路是所有的功能开发都应该独立一个分支，而主分支一样是master。这样的隔离开发不会扰乱主分支上的代码，也能保证主分支的代码准确无误。

这种方式让pull request变得更加有效果。过多的就不解释，通过一个例子看看这个工作流到底是如何工作的。

__小红开始开发一个新功能__  
理所当然，从master切出一个独立功能分支：

```bash
git checkout -b feature-new master
```

持续打码，中途完成部分:

```bash
git status
git add [file]
git commit -m 'xxx'
```

__中午去吃个饭__  
在吃午饭前，小红把自己的功能分支推到了远端仓库。好习惯，多学习。

```bash
git push origin feature-new
```

__小红完成开发__
在合并之前，小红保证远端仓库有自己功能分支的最新代码。

```bash
git push origin feature-new
```

接下来，可以发起一个合并请求，在github或者gitlab都有快捷的合并请求操作。合并功能分支feature-new到master。发起后，团队都可以收到合并请求的通知。

这时候团队可以code review，有问题就可以继续提示小红去修正。

修正后小红可以持续推代码到功能分支，commit记录也会一并出现在pull request处。

__小红发布功能__  
经过紧张的讨论修改，终于完成功能开发，要发布功能：

```bash
git checkout master
git pull
git pull origin feature-new
git push
```
完毕。

### 还能怎么发挥git作用？

__webhooks__

根据github的介绍，webhooks可以通过使用github的事件被触发时通过http post的形式调用服务器上的接口，服务器接受到推送事件之后就可以执行构建，更新项目代码，进而部署生产服务器等等。

> 这一切能限制的只有你的想象力。

一般而言，比如说我部署一个node程序到服务器上需要怎么操作？

1. 本地代码开发完毕，准备上线，上传本地代码到git远端仓库。

2. ssh连接远程服务器，登录管理员账号密码后进入命令行界面。

3. 进入项目目录，拉取最新提交的代码。

4. 执行部署操作。

5. 需要代码更新，重复此操作。

__而我通过webhooks之后，这些操作得到很大的简化。__

1. 配置webhooks的push事件，因为我要在本地push代码后执行后续操作。

![image](https://user-images.githubusercontent.com/21136420/49086433-78755280-f28f-11e8-98ee-a1279e427c8e.png)

2. 在服务器上编写一个自动部署脚本，这里举个简单的脚本`deploy.sh`。

```bash
#！/bin/bash
echo 'enter project'
cd [your project dir]

echo 'pull code'
git pull origin master

echo 'deploy'
pm2 start deploy.js
pm2 logs deploy

echo 'deploy finished'
```

3. 用node写一个监听接口，不一定要node，只要能跑出个接口能监听到事件即可。需要提到：

```javascript
const createHandler = require('node-github-webhook')
const config = {
  path: '/hook',
  secret: 'your srcret'
}
const handler = createHandler(config)
...

handler.on('push', function (event) {
  execFunc('sh ./deploy.sh')
})

```
这里的path和secret都需要在github webhooks那边对应配置上。

4. 完成之后，一旦代码提交到master的话，就会触发事件，然后自动执行后续操作。

### git工具推荐

有几个个人认为不错的git工具或者项目可以提高git的使用。

1. [gitignore](https://github.com/github/gitignore)。在项目根目录新建一个`.gitignore`文件，将不需要提交到git上的文件路径添加到这个文件。在这个项目中可以快速找到自己所属项目的通用gitignore文件

![gitignore](https://images.vrm.cn/2018/11/27/微信截图_20181127222540.png)

2. [`VS Code`] gitignore。可以右键将文件夹或者文件添加到.gitignore文件中。

![gitignore](https://images.vrm.cn/2018/11/27/微信截图_20181127222733.png)

3. [`VS Code`] GitLens。可以让每一行代码都显示历史记录等。

![Gitlens](https://images.vrm.cn/2018/11/27/微信截图_20181127223043.png)

4. [`Chrome`] octotree。浏览github上的代码更加轻松便捷。

![octotree](https://images.vrm.cn/2018/11/27/微信截图_20181127223252.png)

5. Sourcetree。git图形界面工具，讲了那么多命令应该可以不用图形界面了吧😀。
![sourcetree](https://images.vrm.cn/2018/11/28/微信截图_20181128215137.png)

### 最后
分享内容大概如此了，欢迎补充，也希望内容有些帮助。😄

> 参考
> [Rebase 代替合并 ](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/rebase)
> [git 工作流-阮老师的](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)
> [git 工作流](https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md)