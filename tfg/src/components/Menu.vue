<template>
  <div class="menuScreen">
    <div id="container">
      <h1>
        Welcome to<br />
        "Health > Social Media"
      </h1>
      <img
        src="..\assets\puzzle_icon.png"
        alt="game icon logo"
        class="responsive"
      />
      <br />
      <button id= "play_button" type="button" class="btn btn-success btn-lng threeD" @click="changeState(my_stages.PLAY)"><h1>PLAY</h1></button>
      <!-- <button id= "play_button" type="button" class="btn btn-danger btn-lng threeD" @click="changeState(my_stages.END)"><h1>END</h1></button> -->
    </div>
  </div>
</template>

<script>
import Play from "@/components/Play.vue";
import { mapState } from "vuex";
import { STAGES as stages } from "@/globals.js";

export default {
  name: "Menu",
  components: {
    Play,
  },
  data() {
    //read data from external global variables into local variable
    return {
      my_stages: stages,
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
.menuScreen {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.responsive {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
#container {
  text-align: center;
  position: relative;
  top: 10%;
  font-family: "Source Sans Pro", sans-serif;
  animation: reveal 3000ms ease-in-out forwards 200ms,
    glow 2500ms linear infinite 4000ms;
}
@keyframes reveal {
  80% {
    letter-spacing: 4px;
  }
  100% {
    background-size: 300% 300%;
  }
}
@keyframes glow {
  40% {
    text-shadow: 0 0 8px rgb(39, 39, 39);
  }
}
#play_button{
  width: 15rem;
  border-radius: 10rem;
  border-width: 0.1mm;
  border-color: black;
}
.threeD {
  color: rgb(255, 255, 255);
  white-space: nowrap;
  font-family: sans-serif;
  transition: 0.3s;
}
.threeD:hover {
  transition: 0.3s;
  transform: scale(1.1);
}
</style>