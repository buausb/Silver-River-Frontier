<template>
    <div class="container">
        <div class="left-navigate">
          <div class="functionBtns">
            <router-link to="/home/content/filestate">
              <div class="hand-out" @click="changeHandOutState()">
                  <!-- <img src="../assets/images/handout.png"/> -->
                  <img v-if="handoutState" src="../assets/images/handout-active.png"/>
                  <img v-else src="../assets/images/handout.png"/>
              </div>
            </router-link>
            <router-link to="/findout">
              <div class="hand-out" @click="changeFindOutState()">
                  <img v-if="findoutState" src="../assets/images/handout-active.png"/>
                  <img v-else src="../assets/images/handout.png"/>
              </div>
            </router-link>
            
            <router-link to="/test">
                <div class="hand-out" >
                  <img src="../assets/images/handout.png"/>
                </div>
            </router-link>
            
          </div>
          
        </div>
        <div class="right-content">
          <!-- <HomeContent></HomeContent> -->
          <RouterView></RouterView>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue'
    
    
    
    // import HomeContent from './HomeContent.vue'
    export default {
        name: "HomeCom",
        components:{
          // HomeContent
        },
        setup(){
          const handoutState = ref(true);
          const findoutState = ref(false);
            function changeHandOutState() {
                const state = handoutState.value;
                if (!state) {
                  handoutState.value = !handoutState.value;
                }
                findoutState.value = false;
            }

            function changeFindOutState() {
                const state = findoutState.value;
                if (!state) {
                  findoutState.value = !findoutState.value;
                }
                handoutState.value = false;
            }

            return {
                changeHandOutState,
                changeFindOutState,
                handoutState,
                findoutState
            }
        }
    }

</script>

<style scoped>
  .container {
    width: 80%;
    height: 700px;
    /* background-color: red; */
    box-shadow: 0 2px 6px #ddd;
    margin: 0 auto;

    display: flex;
    flex-direction: row
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
  .functionBtns {
    border: 2px blue solid;
    padding-top: 45%;
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