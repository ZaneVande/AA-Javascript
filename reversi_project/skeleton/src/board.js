// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE


function _makeGrid () {
  const grid = [];
  for (let i = 0; i < 8; i++) {
    let row = new Array(8);
    grid.push(row);
  }

  grid[3][3] = new Piece("white")
  grid[3][4] = new Piece("black")
  grid[4][3] = new Piece("black")
  grid[4][4] = new Piece("white")

  return grid
}


function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];


Board.prototype.isValidPos = function (pos) {
  return (pos[0] >= 0 && pos[0] < 8) && (pos[1] >= 0 && pos[1] < 8);
};


Board.prototype.getPiece = function (pos) {
  
};


Board.prototype.isMine = function (pos, color) {
};


Board.prototype.isOccupied = function (pos) {
};


Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
};


Board.prototype.validMove = function (pos, color) {
};


Board.prototype.placePiece = function (pos, color) {
};


Board.prototype.validMoves = function (color) {
};


Board.prototype.hasMove = function (color) {
};


Board.prototype.isOver = function () {
};



Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE