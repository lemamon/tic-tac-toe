export const checkWin = (tiles) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      tiles[a].marker &&
      tiles[a].marker === tiles[b].marker &&
      tiles[a].marker === tiles[c].marker
    ) {
      return tiles[a].marker;
    }
  }
  return false;
};

export const checkDraw = (tiles) => {
  return tiles.every((tile) => tile.marker);
};
