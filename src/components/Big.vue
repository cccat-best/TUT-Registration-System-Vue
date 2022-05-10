<template>
  <div id="pos">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'Big',
  }
</script>

<style scoped>

#pos {
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/bgi.png');
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
  position: relative;
}
</style>
