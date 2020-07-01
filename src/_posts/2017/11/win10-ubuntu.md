---
title: 前端搭建win10-ubuntu双系统的小记
description: 笔记本安装win10和ubuntu做开发本
keywords: 前端,win10,ubuntu,gnome
labels: ['工具']
date: 2017-11-09
---

## 首先版本是Ubuntu 16.04(LTS)非麒麟版本。

由于时间不多，主要拿Ubuntu进行web开发。其他发行版并未尝试。也好记录一下配置Ubuntu以及gnome的走过的坑。

### 安装Ubuntu

可到官网安装，版本看个人喜欢，麒麟版本自带中文以及拼音输入法等。

[Download](http://cn.ubuntu.com/download/)

下载好之后用软碟通写入U盘映像。无论双系统与否都必须关闭secure Boot。
解释算好也基本上上每个懂折腾Linux的都会看过这一篇文章
[反Secure Boot垄断：兼谈如何在Windows 8电脑上安装Linux](http://www.ruanyifeng.com/blog/2013/01/secure_boot.html)

自行划分硬盘空间。
硬盘划好，电脑开机选快捷启动就进入安装，分区的时候主要有几个分区点（以下只是在双系统下分配硬盘空间较小的建议，实际看个人需要）:

/：存储系统文件，建议15G;

swap：交换分区，即Linux系统的虚拟内存，建议是物理内存的1～2倍；

/home：home目录，存放音乐、图片及下载等文件的空间，建议最后分配所有剩下的空间；

/boot：包含系统内核和系统启动所需的文件，实现双系统的关键所在，建议200M。

均可选择为逻辑分区。
一路下来就可以开机了。
由于没有记录图片所以不再多说。

### 安装gnome

安装完Ubuntu如果足够开发就不需要Gnome，自带的是Untiy，Gnome只是美化和方便。因为有大量的扩展可以使用。

```
1. Ctrl+Alt+T 打开终端
```

```
2. $ sudo apt-get install gnome-shell  //安装gnome-shell
```

```
3. $ sudo apt-get install ubuntu-gnome-desktop  //安装gnome-desktop
```

```
4. $ sudo apt-get install unity-tweak-tool  //安装 unity-tweak-tool
```

```
5. $ sudo apt-get install gnome-tweak-tool   //安装gnome-tweak-tool
```

### 重启请选择 Gnome经典桌面

输密码那有个齿轮的，不选择的话会有坑。一开始自己默认进入的是Ubuntu桌面，只能应用主题图标，扩展都没办法应用。
gnome拓展到[gnome拓展中心](https://extensions.gnome.org/)下载安装。
如果没有安装浏览器插件，火狐和chrome的应用或者说插件中心搜索gnome shell extensoins 安装就可以。

### 扩展推荐和注意

推荐(必装)： [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)、[Hide Top Bar自动隐藏顶栏](https://extensions.gnome.org/extension/545/hide-top-bar/)

底栏去除：

到目录

```bash
/usr/share/gnome-shell/extensions
```