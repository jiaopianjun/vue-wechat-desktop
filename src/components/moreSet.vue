<template>
  <div 
    class="moreSet" 
    :class="isShow ? 'showMoreSet' : ''"
    id="moreSet">
    <div class="groupSet" v-if="messageType === 1">
      <div class="setGroupName">
        <p>群名</p>
        <input type="text" value="公众号：小夭同学">
      </div>
      <div class="setGroupNotice">
        <p>群公告</p>
        <input type="text" value="这是前端交流群">
      </div>
    </div>
    <div class="groupSearch" v-if="messageType === 1">
      <input type="text" placeholder="搜索">
      <img src="@/assets/images/search.png" alt="">
    </div>
    <div class="setMember addMember">
      <span class="addIcon"></span>
      添加成员
    </div>
    <div class="setMember delMember" v-if="messageType === 1">
      <span class="addIcon"></span>
      删除成员
    </div>
    <div class="groupUserList">
      <div class="li" v-for="(list, index) in memberList" :key="index">
        <img :src="list.avator" alt="">
        <span>{{list.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moreSet',
  props: ['messageType','isShow'],
  data() {
    return {
      memberList: [
        {
          id: 1,
          avator: 'https://web.lieme.cn/stack/13.jpg',
          name: 'Lie'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .moreSet
    transition all .3s linear 
    position absolute
    right -249px
    top 60px
    width 249px
    border-left 1px solid #E2E2E2
    background #fff
    box-sizing border-box
    padding 10px 20px
    height 660px
    .groupSet
      width 100%
      box-sizing border-box
      border-bottom 1px solid #F2F2F2
      margin-bottom 15px
      padding-bottom 15px
      input 
        border none 
        background none
        width auto
      .setGroupName
        margin-bottom 15px
        input 
          position relative
      p
        font-size 13px
        color #888
        margin 0
    .groupSearch
      position relative
      flex 1
      height 26px
      box-sizing border-box
      margin-bottom 15px
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
    .setMember
      height 30px
      width 100%
      font-size 15px
      display flex
      align-items center
      cursor pointer
      .addIcon
        position relative
        display inline-block
        width 28px
        height 28px
        border: 1px solid #000
        border-radius 4px
        margin-right 15px
        &::after,
        &::before  
          content: ''
          position absolute
          background #000
          left 50%
          top 50%
          transform translate(-50%,-50%) 
    .addMember
      margin-bottom 15px
      .addIcon
        &::after
          width 20px
          height 1px
        &::before 
          width 1px
          height 20px
    .delMember
      .addIcon
        &::after
          width 20px
          height 1px
    .groupUserList
      width 100%
      height auto 
      overflow hidden       
      overflow-y  auto 
      margin 15px auto
      .li 
        height 30px
        display flex
        align-items center
        font-size 13px
        margin-bottom 15px
        cursor pointer
        &:last-child  
          margin 0
        img   
          width 30px
          height 30px
          border-radius 4px
          margin-right 15px
  .showMoreSet
    right 0
</style>
