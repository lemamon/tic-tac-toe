import Tile from './tile.js';

export default {
  template: `
    <div class="board">
      <Tile 
        v-for="(tile, index) in tiles" 
        :key="index" 
        :marker="tile.marker" 
        :index="index" 
        @click="handleClick(index)" 
      />
    </div>
  `,
  computed: {
    tiles() {
      return this.$store.state.tiles;
    },
    isPaused() {
      return this.$store.state.message !== '';
    }
  },
  components: {
    Tile,
  },
  methods: {
    handleClick(index) {
      if (this.tiles[index].marker === '' && !this.isPaused) {
        this.$store.dispatch('updateTile', index);
      }
    },
  }
}