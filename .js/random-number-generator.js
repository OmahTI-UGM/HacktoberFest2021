/** Generate random integer */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Generate random number */
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
