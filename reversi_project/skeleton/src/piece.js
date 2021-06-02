function Piece (color) {
    this.color = color
}


Piece.prototype.oppColor = function () {
    return (this.color === "black") ? "white" : "black"
};


Piece.prototype.flip = function () {
    this.color = this.oppColor()
};


Piece.prototype.toString = function () {
    return (this.color === "black") ? "B" : "W"
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE