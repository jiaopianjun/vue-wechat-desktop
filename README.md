![mac](http://blogimg.lieme.cn/Fn2HrGSJZP09NmLEcNDYmNdJ86D8)
# 🔥🔥一款高仿mac版微信的单页面应用

## 概述

> 👍👍 利用Vue2.0模仿微信app，努力做到以假乱真的效果。个人独立开发，本项目可以为初学者带来很好的入门经验，有兴趣的同学可以clone 下来自己完成。。项目目前进度==30%==，后期不断更新，直至整个项目完成。努力和mac微信能够达到 90%的相似度，让它更接近微信App的用户交互体验。

```
仿 mac 版 微信
```
## 图片预览
![WX202003112216382x.png](http://blogimg.lieme.cn/Fl9ZOtvENxojuamOCV88VMcUh2No)

## 项目步骤

```
npm install

npm run serve

npm run build

npm run lint

```
## 项目地址

[🥺🥺项目地址在这里](https://github.com/jiaopianjun/vue-wechat-desktop.git)

## 预览地址

[🥺🥺预览地址在这里](https://web.lieme.cn/vueWechatDesktop/dist/index.html#/)

## 项目进度

##### 个人信息
- [x] 用户头像资料展示

##### 聊天列表

- [x] 主体页面
- [x] 聊天列表
- [x] 聊天对话框
- [x] 聊天资料
- [x] 发送图片
- [ ] 群聊天
- [ ] 公众号对话框
- [ ] 切换用户聊天
- [ ] 表情选择
- [ ] 列表右击操作
- [ ] 删除添加操作

##### 通讯录列表

- [ ] 通讯列表
- [ ] 通讯录跳转聊天列表
- [ ] 列表详情

##### 收藏列表

- [ ] 收藏列表
- [ ] 列表详情

##### 文件列表

- [ ] 文件列表
- [ ] 列表详情


## 部分代码


```
<div 
  class="messageList"
  :class="classList[list.megType]"
  v-for="(list, index) in messageList" :key="index">
  <span v-if="list.megType === 2">{{list.megTime}}</span>
  <img :src="list.avator" alt="" v-if="list.megType === 1" class="userAvator" />
  <pre class="messageText" v-if="list.megType !== 2 && list.textType === 0">
    {{list.megText}}
    <img v-if="list.megType !== 2 && list.textType === 1" :src="list.megText" alt="">
  </pre>
  <img :src="list.avator" alt="" v-if="list.megType === 0" class="userAvator" />
</div>
```


```
sendMes() {
  if(this.onInputValue !== '') {
    const onMesList = {
      avator: 'https://web.lieme.cn/stack/72.jpg',
      megType: 0, // 0 自己 1 对方 2 时间
      megText: this.onInputValue,
      megTime: dateUtil.formatDate(),
      textType: 0, // 0 文字 1 图片
    }
    this.messageList.push(onMesList)
  }
  this.onInputValue = ''
  this.scollDiv()
},
```


## 前端公众号和交流群
![gg.gif](https://blogimg.lieme.cn/FsaWonzTLc3IJVZgYDrjHdVEj3HR)