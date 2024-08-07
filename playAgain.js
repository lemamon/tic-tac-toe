export default {
  template: `
    <button class="play-again" @click="playAgain">
      Play Again
    </button>
  `,
  methods: {
    playAgain() {
      this.$store.dispatch('resetGame');
    }
  },
}