<template>
  <div class="seeList" id="seeList">
    <div 
      v-for="(list, index) in chatList"
      :key="index"
      @click="lookDetail(list, list.id)"
      :class="list.current ? 'bgCurrent' : ''"
      class="seeItem">
      <div class="itemAvator">
        <img :src="list.avator" alt="">
        <span class="readNum" v-if="list.readNum !== 0">{{list.readNum}}</span>
      </div>
      <div class="itemInfo">
        <div class="infoTitle">
          <span class="titleName">{{list.name}}</span>
          <span class="titleTime">{{list.time}}</span>
        </div>
        <div class="infoAbridge">
          {{list.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seeList',
  data() {
    return {
      chatList: [
        {
          id: 1,
          avator: 'http://blogimg.lieme.cn/FpbyJhtYGB9cT93VS-l_jah9v4Ov',
          readNum: 0,
          text: '[2条] 氧气: 有学前端的公众号ma',
          time:'08:33',
          name: '小夭同学',
          type: 0, // 0 个人 1 群 2 公众号
          current: true,
          top: false
        },
      ]
    }
  },
  methods: {
    lookDetail(list, id) {
      this.chatList.map((item) => {
        if (item.id === id) {
          item.current = !item.current
        } else {
          item.current = false
        }
        return item
      })
    }
  },
}
</script>
<style lang="stylus" scoped>
  .seeList
    height auto
    .seeItem
      height 70px
      padding 13px
      box-sizing border-box
      display flex
      border-bottom 1px solid #EEE
      cursor pointer
      backgroud #FBFBFB
      // &:hover 
      //   background #D6D6D6
      .itemAvator 
        position relative
        width 44px
        height 44px
        margin-right 13px
        img 
          width 44px
          height 44px
          border-radius 4px
        .readNum
          position absolute
          right -8px
          top -6px
          min-width 6px
          padding 0 5px
          height 16px
          font-size 12px
          color #fff
          background #E1473C
          border-radius 40px
          text-align center
          line-height 16px
      .itemInfo
        flex 1
        .infoTitle
          display flex
          justify-content space-between
          .titleName
            font-size 15px
          .titleTime
            font-size 12px
            color: #B2B2B2
        .infoAbridge
          height 26px
          line-height 26px
          font-size 12px
          color: #B2B2B2
    .bgCurrent
      background #D6D6D6
    .topCurrent
      background #F1F1F1
</style>