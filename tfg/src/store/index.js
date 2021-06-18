import { createStore } from 'vuex'
import { STAGES as stages } from "@/globals.js"

export default createStore({
  state: {
    //Stages
    currentState: 'Menu',
    currentStages: [
      { id: stages.MENU, name: 'Menu' },
      { id: stages.PLAY, name: 'Play' },
      { id: stages.END, name: 'End' }
    ],
  },
  mutations: {
    changeState(state, payload) {
      state.currentState = state.currentStages[payload.id].name;
    }
  },
  actions: {
  },
  modules: {
  }
})
