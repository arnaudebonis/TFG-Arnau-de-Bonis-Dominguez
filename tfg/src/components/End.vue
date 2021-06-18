<template>
  <div class="endScreen">
    <div class="container-fluid">
      <div class="top_part">
        <button
          class="btn threeD"
          @click="changeState(my_stages.MENU)"
          :style="{
            backgroundImage: 'url(' + require(`@/${gobackimage}`) + ')',
          }"
        ></button>
      </div>
    </div>
    
    <div id="container">
      <h1>Thank you for playing the game!!</h1>
      <h4>Remember that your health is more important than anything.</h4>
      <h5>Even though people recognize that these sites have negative impacts, it’s difficult to stop using them. Unfortunately, they have addictive effects. But reducing social media use to just 30 minutes per day can significantly help improve our mental health.</h5>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Play from "@/components/Play.vue";
import { mapState } from "vuex";
import { STAGES as stages } from "@/globals.js";

export default {
  name: "End",
  components: {
    Menu,
    Play,
  },
  render() {},
  data() {
    //read data from external global variables into local variable
    return {
      my_stages: stages,
      gobackimage: "assets/goback_icon.png",
    };
  },
  computed: {
    ...mapState(["currentState"]),
  },
  methods: {
    changeState(next) {
      this.$store.commit("changeState", { id: next });
    },
  },
};
</script>

<style scoped>
.endScreen {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  height: 100vh;
}
.top_part {
  /*image position*/
  z-index: 1;
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  top: 4rem;
  left: 4rem;
}
.btn {
  /*image settings*/
  background-size: cover;
  background-position: center center;
  height: min(50px, 10vh);
  height: max(45px, 5vh);
  width: min(55px, 10vw);
  border-radius: 100%;
}
.threeD {
  color: rgb(0, 0, 0);
  white-space: nowrap;
  font-family: sans-serif;
  transition: 0.3s;
}
.threeD:hover {
  transition: 0.3s;
  transform: scale(1.1);
}
#container{
  text-align: center;
  position: relative;
  top: 6rem;
  font-family: "Source Sans Pro", sans-serif;
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>