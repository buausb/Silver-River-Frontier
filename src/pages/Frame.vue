<template>
    <div class="header">
        <div class="content">

            <router-link to="/home">
                <div class="logo">
                    <span  v-for="(item,index) in title" 
                        :key="index" :style="{color:item.color}">
                            {{ item.letter }}
                    </span>
                </div>
            </router-link>
            
            <div class="slogan">
                <span :style="sloganStyle"> 自强不息，知行合一</span>
            </div>
            <div class="functions">
                <span v-for="(item, index) in func" :key="index">
                    {{ item.name }}
                </span>
            </div>
        </div>
    </div>
    <Home></Home>    
</template>

<script>
    import { ref,reactive,toRefs } from 'vue';
    import Home from "./Home"

    export default {
        name: "FrameCom",
        components: {
            Home
        },
        setup(){
            
            let title = ref([
                {
                    letter:"S",
                    color:"#3285FF"
                },
                {
                    letter:"i",
                    color:"#FB3624"
                },{
                    letter:"l",
                    color:"#FFBA02"
                },{
                    letter:"v",
                    color:"#3285FF"
                },{
                    letter:"e",
                    color:"#FB3624"
                },{
                    letter:"r",
                    color:"#FFBA02"
                },{
                    letter:"-",
                    color:"#3285FF"
                },{
                    letter:"R",
                    color:"#FB3624"
                },{
                    letter:"i",
                    color:"#FFBA02"
                },{
                    letter:"v",
                    color:"#3285FF"
                },{
                    letter:"e",
                    color:"#FB3624"
                },{
                    letter:"r",
                    color:"#FFBA02"
                },
            ])
            let sloganStyle = reactive({
                fontStyle: "italic",
                color: "#999896"
            })
            let func = ref([
                {
                    icon:"",
                    name:"登录",
                },{
                    icon:"",
                    name:"联系我们",
                },
            ])
            let data = reactive({
                msg: "Hello",
                title,
                sloganStyle,
                func
            })

            return {
                ...toRefs(data)
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 60px;
        box-shadow: 0 2px 6px #ddd;
    }
    .content{
        width: 80%;
        height: 60px;
        /* background-color: rgb(154, 230, 41); */
        margin: 0 auto;
    }
    .content div {
        display: inline-block;
    }
    .logo{
        font-size: 40px;
        /* background-color: blue; */
    }
    .slogan{
        /* background-color: pink; */
        margin-left: 70px;
        background:-webkit-linear-gradient(right,  #00FF00,#FF0000);/*设置线性渐变*/
		/*为了支持更多的浏览器*/
		background-clip: text;/*背景被裁剪到文字*/
		-webkit-text-fill-color: transparent;/*设置文字的填充颜色*/
        text-shadow:-1px -1px #fff,1px 1px #333;
    }
    .functions {
        /* background-color: brown; */
        margin-left: 550px;
        color: #696868;
        text-shadow:-1px -1px #fff,1px 1px #333;
    }
    .functions span {
        margin-left: 20px;
        font-size: 20px;
        cursor: pointer;
        /* background-color: aqua; */
    }
</style>