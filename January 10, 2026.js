function ticTacToe(board) {

  const rows = [board[0], board[1], board[2]];
  const cols = board[0].map((_, i) => board.map(row => row[i]));

  const diag = [
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]]
  ];

  const newBoard = [...rows, ...cols, ...diag];

  for (const row of newBoard) {
    const unique = new Set(row);

    if (unique.size === 1 && unique.has("X")) {
      return "X wins";
    } else if (unique.size === 1 && unique.has("O")) {
      return "O wins";
    }
  }

  return "Draw";
}