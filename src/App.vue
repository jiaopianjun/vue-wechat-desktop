<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
  }
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    background: rgba(110, 107, 107, 0.1)
  }
</style>
