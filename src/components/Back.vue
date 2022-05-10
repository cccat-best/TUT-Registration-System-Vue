<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" @click="home">
          <a-icon type="home" />
          <span>首 页</span>
        </a-menu-item>        
        <a-menu-item key="2" @click="stuInfo">
          <a-icon type="team" />
          <span>学生信息</span>
        </a-menu-item>
        <a-menu-item key="3" @click="ann">
          <a-icon type="read" />
          <span>公告管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" id="mydate">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <span class="time">{{mytime}}   （ GMT+0800 中国标准时间 ）</span>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#f0f2f5', minHeight: '280px'}"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  // var time = new Date,
  // timer = time.toLocaleString();

  // setInterval(() => {
  //   // console.log(this);
	//   var times = new Date(); // 修改日期数据
  //   window.timer = times.toLocaleString();
  //   // console.log(window.timer)
  // }, 1000);
  //   console.log(window.timer);

  export default {
    name: 'Back',
    data() {
      var timer = new Date();
      return {
        collapsed: false,
        mytime:timer,
      };
    },
    mounted() {
      //创建定时器更新最新的时间
      var _this = this;
      this.timeId = setInterval(function() {
        _this.mytime = new Date().toLocaleString();
        // console.log(_this.mytime)
      }, 1000);
    },
    beforeDestroy: function() {
      //实例销毁前青出于定时器
      if (this.timeId) {
        clearInterval(this.timeId);
      }
    },

    beforeRouteEnter (to, from, next) {
      if(from.path === "/big/login" || from.path === "/back" || from.path === "/back/home" || from.path === "/back/stuInfo" || from.path === "/back/ann"){
        next();
      }
      else{
        next("/big/login");
      }
    },
    methods: {
      home(){
            this.$router.push({
              name:"",
              path: '/back/home',
            })
        },
      stuInfo(){
            this.$router.push({
              name:"",
              path: '/back/stuInfo',
            })
        },
      ann(){
            this.$router.push({
              name:"",
              path: '/back/ann',
            })
        }      
    },

  }

  
  
</script>

<style scoped>

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 36px;
    background-image: url('../assets/bgi_logo.png');
    background-size: cover;
    margin: 16px;
  }

  #components-layout-demo-custom-trigger{
    height: 100%;
    width: 100%;
  }

  #components-layout-demo-custom-trigger .time{
    float: right;
    font-size: 17px;
    line-height: 64px;
    padding: 0 24px;
  }

</style>