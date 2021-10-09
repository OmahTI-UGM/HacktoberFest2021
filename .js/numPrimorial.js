function numPrimorial(n) {
  //your code here
  let arr = [];
  let i = 2;
  while (arr.length < n) {
    if (prime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr.reduce((total, val) => total * val);
}

function prime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
