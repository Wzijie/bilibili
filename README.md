# 项目描述
React仿哔哩哔哩移动端

## 目录结构
```
BILIBILI
├─dist
│  ├─image
│  ├─js
│  │  └─vendor
│  └─style
├─src
│  ├─image          // 图片资源
│  │  ├─banner
│  │  ├─channel
│  │  ├─live
│  │  │  └─banner
│  │  ├─liveFace
│  │  ├─ranking
│  │  ├─videoCover
│  │  └─videoPlayer
│  ├─js          
│  │  ├─components      // 组件
│  │  │  ├─ChannelContent
│  │  │  ├─IndexContent
│  │  │  ├─LiveContent
│  │  │  ├─RankingContent
│  │  │  ├─UserContent
│  │  │  └─VideoContent
│  │  │      └─RecommendComment
│  │  ├─plugs       // 插件方法
│  │  └─testData        // 一开始用来测试的数据，现在没用到了
│  │      ├─channel
│  │      ├─live
│  │      ├─ranking
│  │      │  └─rankingMainData
│  │      └─user
│  └─style      // css
```

## 项目预览
![image](http://weizijie.cc/bilibili/src/image/bilibili.jpg)

[在线预览](http://weizijie.cc/bilibili/)
[代码地址](https://github.com/Wzijie/bilibili)

仿写页面：5个菜单首页、视频播放页、搜索页

## 使用技术
- React 渲染视图
- es6
- rem适配移动端
- localStorage 保存历史搜索
- video 视频播放

## 功能实现
- 可拖动的轮播图
- 图片懒加载
- 排行版切换请求数据
- 搜索功能，筛选关键字
- 视频播放及滚动弹幕

## 关于视频播放
播放器制作过程基本上是一直看手册，根据相关事件及属性实现想要的功能。滚动弹幕的实现用了很简单的方法，铺几条弹幕轨道，然后不断插入p标签。虽然做了播放器，但我在ios的safire浏览器及qq浏览器测试都会调用浏览器的播放器。视频数据获取方法有一个问题，需要访问过一次官网才能正常请求到数据，原因还未找到。

## 关于搜索
值得一提的是搜索返回的数据有一段html需要插入页面，而直接插入会显示html字符串而不是标签，需要使用dangerouslySetInnerHTML属性插入html标签例：
```
<div dangerouslySetInnerHTML={{__html: '<p>123</p>'}} />
```
dangerously是危险的意思，为了防止xss攻击不应该直接插入html标签，如果有需要也要对html标签进行处理，我的处理方法比较简单，直接将script字符替换掉。

## 打个广告
2018年毕业生求前端实习 [我的简历](http://weizijie.cc/)