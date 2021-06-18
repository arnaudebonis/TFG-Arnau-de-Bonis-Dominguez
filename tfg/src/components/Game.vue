<template>
  <!--IMPORTANTE: Template y div van juntos-->
  <div class="game-div">
    <!--@s nos lleva directo a la carpeta src-->
    <div v-if="currentState == 'Menu'"><Menu /></div>
    <div v-if="currentState == 'Play'"><Play /></div>
    <div v-if="currentState == 'End'"><End /></div>
    <!-- <h2>{{message}}</h2> -->
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Play from "@/components/Play.vue";
import End from "@/components/End.vue";
import { mapState } from "vuex";
import { STAGES as stages } from "@/globals.js";

export default {
  name: "Game",
  components: {
    Menu,
    Play,
    End,
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
