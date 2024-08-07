import { checkWin, checkDraw } from "./helper.js";

const { Store } = Vuex;

const store = new Store({
  state: {
    message: "",
    currentPlayer: "x",
    player1: 0,
    player2: 0,
    tiles: Array(9)
      .fill()
      .map(() => ({ marker: "" })),
  },
  mutations: {
    incrementPlayer1(state) {
      state.player1 += 1;
    },
    incrementPlayer2(state) {
      state.player2 += 1;
    },
    resetGame(state) {
      state.tiles = Array(9)
        .fill()
        .map(() => ({ marker: "" }));
      state.currentPlayer = Math.random() > 0.5 ? "x" : "o";
      state.message = "";
    },
    updateTile(state, index) {
      if (state.tiles[index].marker === "") {
        state.tiles[index] = {
          marker: state.currentPlayer,
        };

        if (checkWin(state.tiles)) {
          state.message = `${state.currentPlayer} wins!`;
          state.currentPlayer === "x"
            ? (state.player1 += 1)
            : (state.player2 += 1);
          return;
        } else if (checkDraw(state.tiles)) {
          state.message = "Draw!";
          return;
        }

        state.currentPlayer = state.currentPlayer === "x" ? "o" : "x";
      }
    },
  },
  actions: {
    incrementPlayer1({ commit }) {
      commit("incrementPlayer1");
    },
    incrementPlayer2({ commit }) {
      commit("incrementPlayer2");
    },
    resetGame({ commit }) {
      commit("resetGame");
    },
    updateTile({ commit }, index) {
      commit("updateTile", index);
    },
  },
});

export default store;
