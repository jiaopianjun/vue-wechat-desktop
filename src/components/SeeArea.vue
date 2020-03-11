<template>
  <div class="seeArea" id="seeArea">
    <div class="areaHead">
      <span class="headName">氧气</span>
      <img class="headMore" src="@/assets/images/more.png" @click="showMore"/>
    </div>
    <div class="areaChat" id="areaChat">
      <div class="areaChatList" id="areaChatList">
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
      </div>
    </div>
    <div class="areaEditor">
      <div class="editorBar">
        <div class="barMedia">
          <img src="@/assets/images/emoji.png" class="emoji" alt="">
          <div class="barFileDiv">
            <img src="@/assets/images/barfile.png" class="barfile" alt="">
            <input @change="chooseImg" type="file" accept="image/*" />
          </div>
          <img src="@/assets/images/screen.png" class="screen" alt="">
          <img src="@/assets/images/chatrecord.png" class="chat" alt="">
        </div>
        <div class="barVoice">
          <img src="@/assets/images/phone.png" class="screen" alt="">
          <img src="@/assets/images/video.png" class="chat" alt="">
        </div>
      </div>
      <div class="editorTextArea">
        <textarea 
          v-model="onInputValue"
          placeholder="你想的..."
          cols="30" 
          rows="10" 
          @keyup.enter="sendMes"/>
      </div>
    </div>
    <moreSet 
      :messageType="messageType"
      :isShow="isShow" 
      />
    <div class="officialAccount">
      <div 
        v-for="(list,index) in accountList"
        :key ="index"
        class="accountList">
        <div class="listItem">
          <div class="accountImg">
            <img :src="list.avator"  alt="">
          </div>
          <div class="accountInfo">
            <span>{{list.name}}</span>
            <span>{{list.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateUtil from '@/lib/dateUtil'
import moreSet from '@/components/moreSet.vue'
export default {
  name: 'seeArea',
  components: {
    moreSet
  },
  watch: {
  },
  data() {
    return {
      classList: ['messageRight','messageLeft','messageTime'],
      messageList: [
        {
          avator: 'https://web.lieme.cn/stack/72.jpg',
          megType: 0, // 0 自己 1 对方 2 时间
          megText: '有什么学前端的公众号推荐的嘛',
          megTime: '22:22',
          textType: 0, // 0 文字 1 图片
        },
        {
          avator: 'http://blogimg.lieme.cn/FpbyJhtYGB9cT93VS-l_jah9v4Ov',
          megType: 1, // 0 自己 1 对方 2 时间
          megText: '有鸭，公众号【小夭同学】，不断更新前端知识，都是干货哦~~',
          megTime: '22:22',
          textType: 0, // 0 文字 1 图片
        },
        {
          avator: 'http://blogimg.lieme.cn/FpbyJhtYGB9cT93VS-l_jah9v4Ov',
          megType: 1, // 0 自己 1 对方 2 时间
          megText: 'https://blogimg.lieme.cn/FsaWonzTLc3IJVZgYDrjHdVEj3HR',
          megTime: '22:22',
          textType: 1, // 0 文字 1 图片
        },
        {
          avator: 'https://web.lieme.cn/stack/72.jpg',
          megType: 0, // 0 自己 1 对方 2 时间
          megText: '厉害了',
          megTime: '22:22',
          textType: 0, // 0 文字 1 图片
        },
      ],
      accountList: [
        {
          avator: 'http://blogimg.lieme.cn/FpbyJhtYGB9cT93VS-l_jah9v4Ov',
          name: '小夭同学',
          text: '[链接]关注公众号回复 string 可加入前端交流群'
        }
      ],
      messageType: 0, // 0个人 1 公众号
      isShow: false,
      onInputValue: '',
      onTime: ''
    }
  },
  methods: {
    showMore() {
      this.isShow = true
    },
    chooseImg(e) {
      // const _this = this
      const reader = new FileReader();
      reader.onload = (e) => {
        const onMesList = {
          avator: 'https://web.lieme.cn/stack/72.jpg',
          megType: 0, // 0 自己 1 对方 2 时间
          megText: e.target.result,
          megTime: dateUtil.formatDate(),
          textType: 1, // 0 文字 1 图片
        }
        this.messageList.push(onMesList)
      };
      reader.readAsDataURL(e.target.files[0]);
      setTimeout(() => {
        this.scollDiv()
      }, 100)
    },
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
    scollDiv() {
      this.$nextTick(function(){
        const areaChatList = document.getElementById('areaChat');
        areaChatList.scrollTop = areaChatList.scrollHeight
      })
    }
  },
  created() {
    this.onTime = dateUtil.formatDate()
  }
}
</script>
<style lang="stylus" scoped>
  .seeArea
    position relative
    border-left 1px solid #E5E5E5
    height 100%
    background #F3F3F3
    .areaHead
      box-sizing border-box
      padding 0 20px
      display flex
      align-items center
      justify-content space-between
      height 59px
      border-bottom 1px solid #E2E2E2
      img 
        width 20px
        cursor pointer
  .areaChat
    height 500px
    width 100%
    border-bottom 1px solid #E2E2E2
    padding 16px
    box-sizing border-box
    overflow hidden
    overflow-y auto
    .areaChatList
      width 100%
      height auto
    .messageList
      min-height 35px
      width 100%
      margin-bottom 16px
      display flex
      .userAvator 
        width 30px
        height 30px
        border-radius 4px
      .messageText
        max-width 50%
        margin 0
        position relative
        font-size 12px
        border-radius 4px
        padding 10px 15px
        white-space pre-wrap!important
        word-wrap break-word!important
        *white-space normal!important
        img
          max-width 100%
    .messageLeft
      .userAvator 
        margin-right 15px
      .messageText
        background #fff
        &::before
          position absolute
          left -7px
          content ''
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 7px 12.1px 7px 0;
          border-color: transparent #fff transparent transparent;
    .messageTime
      margin 30px 0
      height 20px
      width 100%
      font-size 12px
      text-align center
      color #B2B2B2
      display inline-block
    .messageRight
      justify-content flex-end
      .userAvator   
        margin-left 15px
      .messageText
        background #A9EA7A
        &::before
          position absolute
          right -7px
          content ''
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 7px 0 7px 12.1px;
          border-color: transparent transparent transparent #A9EA7A;
  .areaEditor
    height 161x
    .editorBar
      padding 18px 20px 0
      height 40px
      display flex
      justify-content space-between
      box-sizing border-box
      .barMedia
        display flex
        align-items center
      .barFileDiv
        position relative
        height 17px
        width 22px
        overflow hidden
        margin-right 20px
        input
          position absolute
          top 0 
          left 0
          cursor pointer
          width 100%
          opacity 0
      .barfile
        height 17px
      img 
        width 22px
        height 22px
        margin-right 20px
        cursor pointer
        &:last-child
          margin-right 0
    .editorTextArea
      height 121px
      textarea
        border none
        box-sizing border-box
        width 100%
        height 115px
        padding 10px 15px
        font-size 12px
        color #333
        letter-spacing 1px
        outline none
        resize none
        background #F3F3F3
  .officialAccount
    width 100%
    overflow hidden
    background #F3F3F3
    .accountList
      height 70px
      box-sizing border-box
      padding 0 60px
      cursor pointer
      .listItem
        display flex
        height 69px
        align-items center
        border-bottom 1px solid #E7E7E7
      .accountImg
        width 45px
        height 45px
        position relative
        border-radius 4px
        margin-right 15px
        img   
          width 100%
          height 100%
      .accountInfo
        height 45px
        flex 1
        span 
          display inline-block
          width 100%
          &:first-child
            font-size 13px
          &:last-child  
            font-size 12px
            color #B2B2B2
    

</style>