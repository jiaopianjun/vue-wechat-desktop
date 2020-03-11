<template>
  <div class="weChat">
    <Menu />
    <Layout />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Layout from '@/views/Layout.vue'
export default {
  name: 'weChat',
  components: {
    Menu,
    Layout
  }
}
</script>
<style lang="stylus" scoped>
  .weChat
    width 1158px;
    height 720px;
    display flex;
    border-radius 4px;
    overflow hidden
    display flex
    background #fff
    box-shadow 1px 1px 20px rgba(0,0,0,.5)
</style>