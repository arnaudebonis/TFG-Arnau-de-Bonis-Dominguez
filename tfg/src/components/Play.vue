<template>
  <div class="playScreen">
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
    <div class="container-fluid">
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>{{ popuptitle }}</h2>
          <a class="close" href="#">&times;</a>
          <div class="content">
            {{ popupcontent }}
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              :style="{ width: calculatePercentage + '%' }"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ calculatePercentage }}%
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5 end_buttons" v-if="calculatePercentage == 100">
        <div class="text_to_see_two">
          <h2>YOU FINISHED THE MINI GAME!</h2>
        </div>
        <button
          id="end_button"
          type="button"
          class="btn btn-success threeD"
          @click="changeState(my_stages.END)"
        >
          END</button
        ><br /><br />
        <button
          id="restart_button"
          type="button"
          class="btn btn-warning threeD"
          @click="restartgame()"
        >
          RESTART GAME
        </button>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-sm-12">
            <div class="text_to_see">
              <h3>SELECT THE TWEET THAT CAN MENTALLY HARM SOMEONE</h3>
            </div>
          </div>
        </div>

        <br /><br />
        <!-- Buttons top part code -->
        <div class="container mt-1 imagenes">
          <div class="row mt-1">
            <div class="">
              <!-- Button number 1 code -->
              <button
                v-if="calculateFake == 0"
                class="btntwo threeD"
                :style="{
                  backgroundImage: 'url(' + require(`@/${fakeimage}`) + ')',
                }"
                onclick="window.location.href='#popup1'"
                v-on:click="addone()"
              ></button>
              <button
                v-else
                class="btntwo threeD"
                :style="{
                  backgroundImage: 'url(' + require(`@/${goodimage}`) + ')',
                }"
                v-on:click="addzero()"
              ></button>
            </div>
          </div>
        </div>

        <!-- Buttons bottom part -->
        <div class="container mt-1 imagenes">
          <div class="row mt-1">
            <div class="">
              <!-- Button number 2 code -->
              <button
                v-if="calculateFake == 1"
                class="btntwo threeD"
                :style="{
                  backgroundImage: 'url(' + require(`@/${fakeimage}`) + ')',
                }"
                onclick="window.location.href='#popup1'"
                v-on:click="addone()"
              ></button>
              <button
                v-else
                class="btntwo threeD"
                :style="{
                  backgroundImage: 'url(' + require(`@/${goodimage}`) + ')',
                }"
                v-on:click="addzero()"
              ></button>
            </div>
          </div>
        </div>

        <div class="container mt-1 imagenes">
          <div class="row mt-1">
            <div class="">
              <!-- Button number 3 code -->
              <button
                v-if="calculateFake == 2"
                class="btntwo threeD"
                :style="{
                  backgroundImage: 'url(' + require(`@/${fakeimage}`) + ')',
                }"
                onclick="window.location.href='#popup1'"
                v-on:click="addone()"
              ></button>
              <button
                v-else
                class="btntwo threeD"
                :style="{
                  backgroundImage: 'url(' + require(`@/${goodimage2}`) + ')',
                }"
                v-on:click="addzero()"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import End from "@/components/End.vue";
import { mapState } from "vuex";
import { STAGES as stages } from "@/globals.js";
export default {
  name: "Play",
  components: {
    Menu,
    End,
  },
  render() {},
  data() {
    //read data from external global variables into local variable
    return {
      my_stages: stages,
      gobackimage: "assets/goback_icon.png",
      goodimage: "assets/bully_good.png",
      goodimage2: "assets/bully_good2.png",
      fakeimage: "assets/bully_bad.png",
      popuptitle: "Wait! This is not an ad",
      popupcontent:
        "Did you know that around 86% of 18- to 29-year-olds use social media platforms.\
      Mental health concerns have increased in children and young adults. The rate of adolescents \
      reporting symptoms of major depression increased by 52% from 2005 to 2017. From 2009 to 2017, it grew by 63% in adults ages 18 to 25.",
      percentage: 0,
      //Math.floor(Math.random() * (max - min + 1)) + min
      fake: Math.floor(Math.random() * (1 - 0 + 1)),
      good: Math.floor(Math.random() * (1 - 0 + 1)),
      level: 0,
    };
  },
  computed: {
    ...mapState(["currentState"]),
    calculatePercentage() {
      return this.percentage;
    },
    calculateFake() {
      return this.fake;
    },
    calculateLevel() {
      return this.level;
    },
  },
  methods: {
    changeState(next) {
      this.$store.commit("changeState", { id: next });
    },
    addone() {
      if (this.percentage < 100) {
        this.percentage += 25;
        this.fake = Math.floor(Math.random() * (1 - 0 + 1));
        this.good = Math.floor(Math.random() * (1 - 0 + 1));
        if (this.level == 1) {
          this.popuptitle =
            "Social media is not a joke";
          this.popupcontent =
            "A 2017 study of over half a million eighth through 12th graders found that the number exhibiting high levels of depressive symptoms increased by 33 \
          percent between 2010 and 2015. In the same period, the suicide rate for girls in that age group increased by 65 percent.";
        } else if (this.level == 2) {
          this.popuptitle =
            "Social media can affect sleep quality";
          this.popupcontent =
            "60% of adolescents are looking at their phones in the last hour before sleep, and that they get on average an hour less sleep than\
           their peers who don’t use their phones before bed.";
        } else if (this.level == 3) {
          this.popuptitle =
            "Your health is more important";
          this.popupcontent =
            "Spending more than 3 hours on social media per day puts adolescents at a higher risk for mental health problems. \
          13% of kids ages 12-17 report depression and 32% report anxiety. 25% of 18 to 25-year-olds report mental illness. These age groups report high usage of social media.";
        }
        this.level += 1;
        if (this.level == 1) {
          this.fakeimage = "assets/racism_bad.png";
          if (this.good == 0) {
            this.goodimage = "assets/racism_good.png";
            this.goodimage2 = "assets/racism_good2.png";
          } else {
            this.goodimage = "assets/racism_good2.png";
            this.goodimage2 = "assets/racism_good.png";
          }
        } else if (this.level == 2) {
          this.fakeimage = "assets/haters_bad.png";
          if (this.good == 0) {
            this.goodimage = "assets/haters_good.png";
            this.goodimage2 = "assets/haters_good2.png";
          } else {
            this.goodimage = "assets/haters_good2.png";
            this.goodimage2 = "assets/haters_good.png";
          }
        } else if (this.level == 3) {
          this.fakeimage = "assets/bully2_bad.png";
          if (this.good == 0) {
            this.goodimage = "assets/bully2_good.png";
            this.goodimage2 = "assets/bully2_good2.png";
          } else {
            this.goodimage = "assets/bully2_good2.png";
            this.goodimage2 = "assets/bully2_good.png";
          }
        }
      }
    },
    addzero() {
      if (this.percentage > 0 && this.percentage < 100) {
        this.percentage -= 25;
        this.level -= 1;
        this.fake = Math.floor(Math.random() * (1 - 0 + 1));
        this.good = Math.floor(Math.random() * (1 - 0 + 1));
        if (this.level == 0) {
          this.fakeimage = "assets/bully_bad.png";
          if (this.good == 0) {
            this.goodimage = "assets/bully_good.png";
            this.goodimage2 = "assets/bully_good2.png";
          } else {
            this.goodimage = "assets/bully_good2.png";
            this.goodimage2 = "assets/bully_good.png";
          }
        } else if (this.level == 1) {
          this.fakeimage = "assets/racism_bad.png";
          if (this.good == 0) {
            this.goodimage = "assets/racism_good.png";
            this.goodimage2 = "assets/racism_good2.png";
          } else {
            this.goodimage = "assets/racism_good2.png";
            this.goodimage2 = "assets/racism_good.png";
          }
        } else if (this.level == 2) {
          this.fakeimage = "assets/haters_bad.png";
          if (this.good == 0) {
            this.goodimage = "assets/haters_good.png";
            this.goodimage2 = "assets/haters_good2.png";
          } else {
            this.goodimage = "assets/haters_good2.png";
            this.goodimage2 = "assets/haters_good.png";
          }
        } else if (this.level == 3) {
          this.fakeimage = "assets/bully2_bad.png";
          if (this.good == 0) {
            this.goodimage = "assets/bully2_good.png";
            this.goodimage2 = "assets/bully2_good2.png";
          } else {
            this.goodimage = "assets/bully2_good2.png";
            this.goodimage2 = "assets/bully2_good.png";
          }
        }
      }
    },
    restartgame() {
      this.percentage = 0;
      this.level = 0;
      this.fake = Math.floor(Math.random() * (2 - 0 + 1));
      this.good = Math.floor(Math.random() * (1 - 0 + 1));
      this.fakeimage = "assets/bully_bad.png";
      if (this.good == 0) {
        this.goodimage = "assets/bully_good.png";
        this.goodimage2 = "assets/bully_good2.png";
      } else {
        this.goodimage = "assets/bully_good2.png";
        this.goodimage2 = "assets/bully_good.png";
      }
    },
  },
};
</script>

<style scoped>
.playScreen {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  height: 100vh;
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
.btntwo {
  /*image settings*/
  background-size: cover;
  background-position: center center;
  height: 90px;
  width: 300px;
  border-radius: 2.5%;
  background-size: cover;
}
.progress {
  text-align: center;
  position: relative;
  top: 6.8rem;
}
.text_to_see {
  text-align: center;
  position: relative;
  top: 8rem;
  font-family: "Source Sans Pro", sans-serif;
  font-size: medium;
  animation: ease-in-out forwards 200ms, glow 4000ms linear infinite 4000ms;
}
@keyframes glow {
  40% {
    text-shadow: 0 0 8px rgb(255, 255, 255);
  }
}
.text_to_see_two {
  text-align: center;
  position: relative;
  top: -1rem;
  font-family: "Source Sans Pro", sans-serif;
  animation: ease-in-out forwards 200ms, glow 4000ms linear infinite 4000ms;
}
.imagenes {
  justify-content: space-around;
  position: relative;
  top: 5.5rem;
  margin: auto;
}
.row {
  justify-content: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.end_buttons {
  text-align: center;
  position: relative;
  top: 10rem;
  margin: auto;
}
#menu_button {
  width: 10rem;
  border-radius: 10rem;
  border-width: 0.1mm;
  border-color: black;
}
#end_button {
  width: 10rem;
  border-radius: 10rem;
  border-width: 0.1mm;
  border-color: black;
}
#restart_button {
  width: 10rem;
  border-radius: 10rem;
  border-width: 0.1mm;
  border-color: black;
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

/*POP UP STYLE*/

.box {
  width: 40%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  padding: 35px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index: 2;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 40px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 2s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06d85f;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }
  .popup {
    width: 70%;
  }
}
</style>