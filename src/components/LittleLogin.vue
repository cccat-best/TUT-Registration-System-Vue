<template>
<div class="pad">
  <div class="turn">
    <form action="" class="login" ref="form" :model="form" >
      <h1>
        <img
          src="../assets/logo.png"
          width="20%"
          height="20%"
          title="TUT-SIPC"
          alt="SIPC"
        />
      </h1>
      <input type="text" placeholder="用户名" id="User" class="in" v-model="form.username" @keyup.enter="back"/>
      <input type="password" placeholder="密码" id="Pas" class="in" v-model="form.password"  @keyup.enter="back"/>
      <input type="button" class="btn" value="登 录" id="enter" @click="back"/>
    </form>
  </div>
</div>
</template>

<script>

  export default {
    name: 'LittleLogin',
    data(){
      return{
        form:{
          username:'',
          password:'',
        },
        message:'',
      }
    },
    
    methods: {
      
      back(){

        this.$axios({
          method:"POST",
          baseURL:"http://47.94.90.140:8000/",
          url:'/login',
          data:this.form,
          headers: {
              "content-type": "application/json"
          },          
        })
          .then((val) => {
              sessionStorage.setItem("token", val.data.data.token);
              // console.log(val.data.message);
              this.message = val.data.message;
              this.$router.push("/back/home");
          })

          .catch((err) => {
              console.log(err);
              alert("用户名或密码错误");
          });

      },     
    },
    beforeRouteLeave (to, from, next) {
      if(to.path === "/back" || to.path === "/back/home" || to.path === "/back/stuInfo" || to.path === "/back/ann"){
        if(this.message === '请求成功'){
            next();
        }
        else{
          next("/big/login");
        }
        
      }else{
        next();
      }
    }
  };

</script>

<style scoped>
  .pad{
    min-height: 100vh;
    width: 100%;
  }

  .turn{
    margin-top: 130px;
    background-color: transparent;
    height: 350px;
    width: 360px;
    perspective: 800px;
    position: absolute;
    margin-top:150px;
    left: 50%;
    transform: translate(-50%,0);
  }
  
  form{
    position: absolute;
    background-color: rgba(255, 255, 255, .2);
    height: 100%;
    transform-style: preserve-3d;
    border-radius: 30px;
    backdrop-filter: blur(3px);
    border-left: 2px solid rgba(255, 255, 255, .3);
    border-top: 2px solid rgba(255, 255, 255, .3);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
    backface-visibility: hidden;
  }

  input{
    width: 250px;
    height:47px;
    margin-bottom: 20px;
    border: none;
    border-radius: 16px;
    padding-left: 10px;
    background-color: transparent;
    backdrop-filter: blur(3px);
    border-left: 2px solid rgba(255, 255, 255, .3);
    border-top: 2px solid rgba(255, 255, 255, .3);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .2);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, .1);
    color: slategrey;
    font-size: 18px;
    opacity: 0.8;
  }

  ::placeholder{
    padding-left: 7px;
    color: white;
    opacity: 0.9;
    font-size: 16px;
  }

  .in:focus,.in:hover{
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, .1);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .2);
    border-right: 2px solid rgba(255, 255, 255, .3);
    border-bottom: 2px solid rgba(255, 255, 255, .3);
    box-shadow:inset 2px 2px 2px rgba(0, 0, 0, .2);
  }

  input:-internal-autofill-selected {
    -webkit-text-fill-color: slategrey !important;
    transition: background-color 5000s ease-in-out 0s !important;
  }

  .btn{
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
    color: white;
    opacity: 0.9;
    height: 44px;
    width: 200px;
  }

  .btn:active{
    border: none;
    background-color: rgba(255, 255, 255, .1);
    border-right: 2px solid rgba(255, 255, 255, .3);
    border-bottom: 2px solid rgba(255, 255, 255, .3);
    box-shadow:inset 2px 2px 2px rgba(0, 0, 0, .2);
  }

  h1{
    padding: 0;
    margin: 6%;
  }
  
</style>
