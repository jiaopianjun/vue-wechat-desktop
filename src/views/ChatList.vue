<template>
  <div class="chatList" id="chatList">
    <div class="listSearch">
      <div class="searchInput">
        <input type="text" placeholder="搜索">
        <img src="@/assets/images/search.png" alt="">
      </div>
      <div class="addFriends"></div>
    </div>
    <SeeList />
  </div>
</template>
<script>
import SeeList from '@/components/SeeList.vue'
export default {
  name: 'weChat',
  components: {
    SeeList
  }
}
</script>
<style lang="stylus" scoped>
  .chatList
    width 100%
    min-height 100vh
    .listSearch
      height 60px
      width 100%
      box-sizing border-box
      padding 0 10px
      display flex
      align-items center
      background #FBFBFB
      .searchInput
        position relative
        flex 1
        height 26px
        box-sizing border-box
        input 
          position absolute
          left 0
          top 0
          padding-left 24px
          width calc(100% - 34px)
          height 22px
          border none
          background #E6E8E7
          border-radius 4px
          border 1px solid #D5D5D5
        img 
          position absolute
          left 4px
          top 5px
          width 16px
          height 16px
      .addFriends
        position relative
        width 30px
        height 24px
        border 1px solid #E5E5E5
        border-radius 4px
        background #Fff
        cursor pointer
        &::after,
        &::before
          content ''
          position absolute
          background #7F7F7F
          left 50%
          top 50%
          transform translate(-50% , -50%)
        &::after
          width 1px
          height 16px
        &::before
          width 16px
          height 1px
</style>