<template>
  <div class="userInfo">
    <div class="infoBody">
      <div class="infoCont">
        <div class="contUser">
          <span class="name">Lie <img src="@/assets/images/man.png" alt=""></span>
          <span class="account">微信号: Lecooe</span>
        </div>
        <div class="contImg">
          <img src="@/assets/images/avator.jpg" alt="">
        </div>
      </div>
      <div class="infoArea">
        <span class="areaName">地区</span>
        <span class="areaValue">中国</span>
      </div>
    </div>
    <div class="infoChat">
      <span class="share">
        <img src="@/assets/images/userShare.png" alt="">
      </span>
      <span class="chat">
        <img src="@/assets/images/userChat.png" alt="">
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="stylus" scoped>
  .userInfo
    display none
    position absolute
    top 0
    left 55px
    width 338px
    height 270px
    background #fff
    border 1px solid #cccccc
    border-radius 4px
    z-index 99
    box-sizing border-box
    padding 45px 40px
    box-shadow 1px 1px 10px rgba(0,0,0,.5)
    .infoBody
      .infoCont
        display flex
        justify-content space-between
        height 75px
        box-sizing border-box
        padding-bottom 45px
        margin-bottom 25px
        border-bottom 1px solid #E2E2E2
        .contUser
          flex 1
          height 60px
          span  
            display inline-block
            width 100%;
          .name
            display flex
            align-items center
            font-size 28px
            font-weight 400
            img   
              display inline-block
              width 24px
              height 24px
              margin-left 5px
          .account
            font-size 13px
            color #888
        .contImg
          width 60px
          height 60px
          border-radius 2px
          img 
            width 100%
            height 100%
      .infoArea
        .areaName
          color #888
          letter-spacing 20px
          font-size 15px
          margin-right 15px
        .areaValue  
          letter-spacing 2px
    .infoChat
      height 40px
      margin-top 30px
      text-align right 
      display flex
      align-items center
      justify-content flex-end
      span  
        display inline-block
        width 36px
        height 36px
        img   
          width 100%
          height 100%
      .share 
        height 30px
        width 30px
        margin-right 25px
</style>
