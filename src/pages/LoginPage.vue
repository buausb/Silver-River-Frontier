<template>
    <div>
        &/buau_sb
        <button @click="login">登录</button>
    </div>
</template>

<script setup>
    import { defineEmits } from 'vue';

    const $emit = defineEmits(['login-event']);
    function login() {
        /*
            这个状态调整要谨慎，之后要发送请求给后端，后端确认后再调整，存token也是
        */
        localStorage.setItem("login-token","1234随机token")
        $emit("login-event");
    }
</script>

<style scoped>
</style>