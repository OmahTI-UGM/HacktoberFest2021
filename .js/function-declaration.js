//apparently a function
const wakeUp = function () {
  console.log('Wake up!');
};
wakeUp();
//function with argument
const wakeMeUp = function (name) {
  greet = `Wake up, ${name}!`;
  console.log(`Wake up, ${name}!`);
  return greet;
};
wakeMeUp('OmahTI');
//arrow function
const sleepPlease = () => {
  console.log("It's already midnight.");
};
sleepPlease();

x = wakeMeUp('OmahTI');
console.log(x);
