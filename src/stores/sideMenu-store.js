import { defineStore } from "pinia";
// import { ref } from "vue";
// import router from "../router";
// import myFetch from ""

export const useSideMenuStore = defineStore('sideMenu', {
  state: () => ({
    isSideMenuOpen: true
  }),

  getters: {
    // doubleCount: (state) => state.counter * 2,
    getSideMenuStatus: (state) => state.isSideMenuOpen
  },

  actions: {
    // increment() {
    //   this.counter++;
    // },

    someMutation() {

    },

    toggleSideMenuStatus() {
      this.isSideMenuOpen = !this.isSideMenuOpen
    }
  },
})
