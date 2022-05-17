<template>
  <div class="home">
    <div class="headwz">欢迎来到天津理工大学组织报名管理后台 !</div>
    <div class="call">
        <h2>若平台出现错误请联系 : </h2>
        <h3>电话: 022 - 666 - 6666</h3>
        <h3>QQ 交流群: 361172757</h3>
        <h3>地址: 7号楼115实验室</h3>
    </div>
    <div class="weather">
        <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=ya&skin=pitaya" 
         frameborder="0" width="320" height="200" allowtransparency="true"></iframe>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'home',
    beforeRouteEnter (to, from, next) {
      if(from.path === "/big/login" || from.path === "/back" ||from.path === "/back/home" || from.path === "/back/stuInfo" || from.path === "/back/ann"){
        next();
      }
      else{
        next("/big/login");
      }
    }
  }
</script>

<style scoped>
    .home{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .call{
        height: 150px;
        width: 400px;
        background-color: #fff;
        text-align: center;
        padding: 10px;
    }
    .weather{
        height: 200px;
        width: 350px;
        background-color: #fff;
        text-align: center;
        padding-top: 30px;
        margin: 40px;        
    }

  .headwz{
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 64px;
    padding: 0 24px;
    width: 500px;
    background-color: #fff;
    margin: 25px;
  }

</style>