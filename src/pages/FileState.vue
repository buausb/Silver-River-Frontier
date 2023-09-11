<template>
    <div class="content">
        <MyClasses></MyClasses>
    </div>
</template>

<script>
    import MyClasses from '../components/MyClasses.vue'
    export default {
        name:"FileState",
        components:{
            MyClasses
        },
        setup(){

        }
    }
</script>

<style scoped>
    .content {
        background-color: aqua;
    }
</style>