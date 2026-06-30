let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let currentplayer = "X";
function makemove(row, culumn) {
  if (board[row][culumn] == "") {
    board[row][culumn] == currentplayer;
    displayBoard();
    if (checkwin(currentplayer)) {
      alert("le joueur actuel a gagner");
    }
  }
}
