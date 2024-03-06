import { defineStore, acceptHMRUpdate } from "pinia";

export const useUser = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
