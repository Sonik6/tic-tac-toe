// gameLogic.js

// Check if a player has won the game
export function checkWin(board, player) {
  // Check rows, columns, and diagonals for a win
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player) ||
      (board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player)
    ) {
      return true;
    }
  }

  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  }

  return false;
}

// Check if the game is a draw
export function checkDraw(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

// Update the board after a player's move
export function updateBoard(board, row, col, player) {
  const newBoard = [...board];
  newBoard[row][col] = player;
  return newBoard;
}
