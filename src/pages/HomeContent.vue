<template>
    <div class="panel">
        <div class="left-navigate">
            <div class="hand-out" @click="changeFileState()">
                <router-link to="/home/content/filestate">
                    <!-- <img src="../assets/images/handout.png"/> -->
                    <img v-if="fileState" src="../assets/images/handout-active.png"/>
                    <img v-else src="../assets/images/handout.png"/>
                </router-link>    
            </div>
            <div class="hand-out" @click="changeRightState()">
                <router-link to="/home/content/rightmanagement">
                    <!-- <img src="../assets/images/handout.png"/> -->
                    <img v-if="rightState" src="../assets/images/handout-active.png"/>
                    <img v-else src="../assets/images/handout.png"/>
                </router-link>
            </div>
            <div class="hand-out" >
                <img src="../assets/images/handout.png"/>
            </div>
        </div>
        <div class="right-content">
            <!-- <MyClasses></MyClasses> -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script>
    import {ref} from "vue"
    // import MyClasses from '../components/MyClasses.vue'
    export default {
        name:"HomeContent",
        components:{
            // MyClasses
        },
        setup(){
            const fileState = ref(true);
            const rightState = ref(false);
            function changeFileState() {
                if (!fileState.value) {
                    fileState.value = !fileState.value
                }
                rightState.value = false
            }
            function changeRightState() {
                if (!rightState.value) {
                    rightState.value = !rightState.value
                }
                fileState.value = false
            }

            return {
                fileState,
                rightState,
                changeFileState,
                changeRightState
            }
        }
    }
</script>

<style scoped>
    .panel{
        width: 100%;
        height: 100%;

        display: flex;
    }
    .left-navigate {
        border: 1px solid black;
        width: 12%;
        height: 100%;
        display: inline-block;

    }
    .left-navigate>div{
        margin-top: 30px;
    }
    .right-content {
        border: 1px solid black;
        width: 88%;
        height: 100%;
        display: inline-block;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .left-navigate {
    border: 1px solid black;
    width: 12%;
    height: 100%;
    display: inline-block;

  }
  .right-content {
    border: 1px solid black;
    width: 88%;
    height: 100%;
    display: inline-block;
  }
  .hand-out{
    width:100%;
    height:25%;
    border: 2px solid black;
  }
  .hand-out>img {
    width:100%;
    height:100%;
    object-fit: cover
  }
</style>