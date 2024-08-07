import Score from './score.js';
import Board from './board.js';
import Message from './message.js';
import PlayAgain from './playAgain.js';

export default {
  computed: {
    player1() {
      return this.$store.state.player1;
    },
    player2() {
      return this.$store.state.player2;
    },
    message() {
      return this.$store.state.message;
    },
    isPaused() {
      return this.$store.state.message !== '';
    }
  },
  template: `
    <div class="game">
      <Score :player1="player1" :player2="player2" />
      <Board />
      <Message :text="message" />
      <PlayAgain v-if="isPaused"/>
    </div>
  `,
  components: {
    Score,
    Board,
    Message,
    PlayAgain,
  }
}