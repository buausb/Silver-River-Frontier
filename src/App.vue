<template>
  <FrameCom v-if="loginState.isLogin" ></FrameCom>
  <LoginCom v-else @login-event="changeLoginState"></LoginCom>
</template>

<script>
import {onBeforeUnmount, onMounted, reactive} from "vue"

import FrameCom from './pages/Frame.vue'
import LoginCom from './pages/LoginPage.vue'


export default {
  name: 'App',
  components: {
    FrameCom,
    LoginCom,
  },
  setup() {
    // 在App组件销毁前移除登录信息
    onMounted(()=>{
      window.addEventListener("beforeunload",deleLoginState)
    })
    onBeforeUnmount(()=>{
      window.removeEventListener("beforeunload",deleLoginState)
    })
    function deleLoginState() {
      let state = localStorage.getItem("login-token");
      if (null != state) {
        localStorage.removeItem("login-token");
      }
      // 不光要清理本地缓存，还要发送给后端服务器，服务器清除本次的登录信息，清理掉token
    }

    let loginState = reactive({
      isLogin: false
    })
    function changeLoginState() {
      loginState.isLogin = true;
    }
    
    return {
      loginState,
      changeLoginState
    }
    
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  #app{
    /* background-color: aqua; */
  }
</style>
