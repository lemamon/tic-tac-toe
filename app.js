import Game from "./game.js";
import store from "./store.js";

const { createApp } = Vue;

createApp(Game).use(store).mount("#app");
