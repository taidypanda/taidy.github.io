---
layout: post
title: "搭建 Octopress 过程"
date: 2016-05-29 13:15:16 +0800
comments: true
categories: 教程
---
作为一个程序员，如果没有自己的专属技术博客，岂不是很没面子？于是不久前在[damonfish](http://http://damonfish.github.io)的详细教程下完成了在Mac上使用Github+ Octopress搭建属于自己的博客，十分的感谢！所以我把搭建博客的过程记录总结下来。

###1.环境要求
因为本人从事iOS开发,使用的是Mac,所以本篇教程所讲述的就是在Mac上搭建博客的过程.

搭建Octopress需要ruby和git支持,Mac自带git和ruby,所以只需要检查版本就行(网上说是1.9.3以上的版本),可以在终端输入 ruby -version.如果版本较低,可以用一下命令更新:

	brew update
	brew install ruby

###2.安装 

依次在终端输入以下命令(等上一条命令结束之后输入下一条):

	 git clone git://github.com/imathis/octopress.git octopress
	 cd octopress
	 gem install bundler
	 sudo bundle install
	 rake install

在运行bundle install时很可能会遇到sudo gem install bundler 执行后，一直没有响应。这是由于国内网络原因（你懂的），导致rubygems.org存放在 Amazon S3 上面的资源文件间歇性连接失败。所以你会遇到gem install rack或bundle install 的时候半天没有响应的情况。
但好消息是国内某大神帮我们解决了这一心头大患，我们可以用淘宝的Ruby镜像来替换原来的镜像。只需终端执行下面的命令即可：

	$ gem sources -a https://ruby.taobao.org/ -r https://rubygems.org/

然后执行如下命令查看切换后结果

	$ gem sources -l
然后会看到这样的输出：

	*** CURRENT SOURCES ***
	https://ruby.taobao.org

这就说明我们切换到淘宝的 Ruby 镜像了，再次安装 Octopress 所需要的依赖库就会发现成功啦。
除了网络问题,运行bundle install不能成功的原因一般都是ruby问题,建议从这排查.

其中 rake install 是安装默认皮肤的,全称是:	ruby make
到此安装已经差不多了.
###配置github
登录Github 账号登录，点击 New Repository新建免费库，按提示操作，注意无需readme文件（有网友反应readme文件会引起问题）；完成后得到https地址和SSH地址,然后打开终端,输入

	 cd octopress
	 rake setup_github_pages
然后会出现一个问句，请把上面生成的SSH地址粘贴到这里，然后回车继续。

第一行命令用来生成页面，第二行命令用来部署页面；
恭喜,现在你可以看看你的页面了:

	 sudo rake preview

打开浏览器，输入 <http://localhost:4000/>，就可以看到效果了。虽然比较简陋，但让人挺高兴的，你觉得呢？

![image](http://upload-images.jianshu.io/upload_images/566304-92d8ad2ea0c05b3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###4.现在可以发一篇文章到你的octopress上了
在终端上输入:

	 rake new_post["Hello World"]
Hello World是文章名字,你可以自定义

然后在finder上打开

	/Users/pingguo/octopress/source/_posts
会有一个后缀为markdown的文件,可以在这里编辑文章内容,不过里面的

	---
	layout: post             #post代表是一篇博文
	title: "hello world"
	date: 2015-10-14 19:59:22 +0800
	comments: true         #是否允许评论
	categories:             #分类
	---
这段内容千万不要删除
写好之后

	 sudo rake generate
	 rake deploy
你会发现我们的静态站点已经被 push 到 GitHub仓库的 master 分支上。稍等几分钟，访问博客地址 username.github.io ，就会发现你的个人博客站的第一篇blog已创建成功了。

如果你还想把自己的本地资源文件（如Markdown文件等内容）也同步到 GitHub 中，可以执行以下指令：

	 git add .
	 git commit -m "comment"  #comment可随意更改
	 git push origin source

至此,大功告成.
