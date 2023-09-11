<template>
    <div class="content">
        <MyClasses></MyClasses>
    </div>
</template>

<script>
    import MyClasses from '../components/MyClasses.vue'
    export default {
        name:"RightManage",
        components:{
            MyClasses
        },
        setup(){

        }
    }
</script>

<style scoped>
    .content {
        background-color: antiquewhite;
    }
</style>