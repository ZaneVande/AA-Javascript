Array.prototype.bubbleSort = function() {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < (this.length - 1); i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] == [this[i + 1], this[i]];
            sorted = false; 
            } 
        }
    }
    return this;
}

console.log([5, 3, 4, 2, 1].bubbleSort());

String.prototype.substrings = function () {
    let substrings = [];
  
    for (let start = 0; start < this.length; start++) {
      for (let end = start + 1; end <= this.length; end++) {
        substrings.push(this.slice(start, end));
      }
    }
  
    return substrings;
  };
  
  console.log("abc".substrings());