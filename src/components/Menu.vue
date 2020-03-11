<template>
  <div class="menu" id="Menu">
    <div class="menuDerail">
      <div class="derailClose"></div>
      <div class="derailNarrow"></div>
      <div class="derailEnlarge"></div>
    </div>
    <div class="menuBody">
      <div class="userAvatar">
        <img src="@/assets/images/avator.jpg" alt="">
        <UserInfo />
      </div>
      <div class="domain">
        <div class="domainChat domainChat_h"></div>
        <div class="domainContact"></div>
        <div class="domainCollection"></div>
        <div class="domainFile"></div>
      </div>
    </div>
    <div class="menuOpt"></div>
  </div>
</template>

<script>
import UserInfo from '@/components/userInfo.vue'
export default {
  name: 'Menu',
  components: {
    UserInfo
  }
}
</script>

<style lang="stylus" scoped>
  .menu
    width 70px;
    height 720px;
    background #4A4A49;
    .menuDerail
      height 30px;
      width 100%;
      display flex;
      align-items center;
      justify-content space-around
      div
        position relative
        width 14px;
        height 14px;
        border-radius 50%;
        cursor pointer;
        display flex
        justify-content center
        align-items center
        &::after,
        &::before
          display none
        &::after
          width 12px
          height 12px
          text-align center
          line-height 10px
          border-radius 50%;
      .derailClose 
        background #ED6A5F
        &::after
          font-size 12px;
          content '×';
      .derailNarrow
        background #F5C150
        &::after
          font-size 12px;
          content '-';
      .derailEnlarge
        background #62C754
        &::after
          position absolute;
          top 2px;
          right 2px;
          font-size 12px;
          transform scale(.5)
          content '◣';
        &::before
          position absolute;
          bottom 0px;
          left 2px;
          font-size 12px;
          transform scale(.5)
          content '◥';
      &:hover
        div
          &::after,
          &::before
            display inline-block
    .menuBody
      width 100%
      height 400px
      box-sizing border-box
      padding: 30px 0
      .userAvatar 
        position relative
        height 40px
        width 40px
        border-radius 4px
        margin 0 auto 30px
        cursor pointer
        img
          width 100%
          height 100%
      .domain
        div
          width 40px
          height 40px
          margin 0 auto 25px 
          cursor pointer
        .domainChat
          background url('./../assets/images/chat.png') no-repeat center
          background-size 34px 34px
        .domainContact
          background url('./../assets/images/contacts.png') no-repeat center
          background-size 34px 34px
        .domainCollection
          background url('./../assets/images/collection.png') no-repeat center
          background-size 34px 34px
        .domainFile
          background url('./../assets/images/file.png') no-repeat center
          background-size 34px 34px
        
        .domainChat_h
          background url('./../assets/images/chat_h.png') no-repeat center
          background-size 34px 34px
        .domainContact_h
          background url('./../assets/images/contacts_h.png') no-repeat center
          background-size 34px 34px
        .domainCollection_h
          background url('./../assets/images/collection_h.png') no-repeat center
          background-size 34px 34px
        .domainFile_h
          background url('./../assets/images/file_h.png') no-repeat center
          background-size 34px 34px

</style>
