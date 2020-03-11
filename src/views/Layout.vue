<template>
  <div class="layout" id="layout">
    <div class="layoutList">
      <chatList/>
    </div>
    <div class="layoutWarp">
      <seeArea/>
    </div>
  </div>
</template>

<script>
import chatList from '@/views/ChatList.vue'
import seeArea from '@/components/SeeArea.vue'
export default {
  name: 'layout',
  components: {
    chatList,
    seeArea
  }
}
</script>
<style lang="stylus" scoped>
  .layout
    width 1088px
    height 720px
    display flex
    .layoutList
      width 260px
      height 720px
      overflow hidden
      overflow-y auto
    .layoutWarp
      flex 1
</style>