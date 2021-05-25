function range(start, end) {
    if (start === end) {
      return [];
    }
    let r = range(start, end - 1);
    r.push(end - 1);
    return r;
  }
  
function sumRec(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    let lastNum = numbers[numbers.length - 1];
    return sumRec(numbers.slice(0, numbers.length - 1)) + lastNum;
  }

function exp(base, exponent) {
    return exponent === 0 ? 1 : (base * exp(base, exponent - 1));
  }

function fibsIter(n) {
    let fibs = [0, 1];
    if (n < 3) {
      return fibs.slice(0, n);
    }
    while (fibs.length < n) {
      fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
    }
  
    return fibs;
  }

function bsearch(numbers, target) {
    if (numbers.length === 0) {
      return -1;
    }
    const probeIdx = Math.floor(numbers.length / 2);
    const probe = numbers[probeIdx];
  
    if (target === probe) {
      return probeIdx;
    } else if (target < probe) {
      const left = numbers.slice(0, probeIdx);
      return bsearch(left, target);
    } else {
      const right = numbers.slice(probeIdx + 1);
      const subProblem = bsearch(right, target);
  
      return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
    }
  }
  
function mergeSort(array) {
    if (array.length < 2) {
      return array;
    } else {
      const middle = Math.floor(array.length / 2);
      const left = mergeSort(array.slice(0, middle));
      const right = mergeSort(array.slice(middle));
  
      return merge(left, right);
    }
  }

function subsets(array) {
    if (array.length === 0) {
      return [[]];
    }
    const first = array[0];
    const withoutFirst = subsets(array.slice(1));
    const withFirst = withoutFirst.map(sub => [first].concat(sub) );
  
    return withoutFirst.concat(withFirst);
  }