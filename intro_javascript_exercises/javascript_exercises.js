Array.prototype.uniq = function() {
    let unique = [];
    this.forEach(function(ele) {
        if (!unique.includes(ele)) {
            unique.push(ele);
        }
    });
    return unique;
}

// console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

Array.prototype.twoSum = function() {
    const pairs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = (i + 1); j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }
        }
    }
    return pairs
}

// console.log([-1, 0, 2, -2, 1].twoSum())

Array.prototype.transpose = function() {
    const flipped = Array.from(
        { length: this[0].length },
        () => Array.from({ length: this.length})
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            flipped[j][i] = this[i][j];
        }
    }
    return flipped;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())