function encode(string) {
  let a = string.split("").map((item, index) => {
    switch (item) {
      case "a":
        item = 1;
        break;
      case "e":
        item = 2;
        break;
      case "i":
        item = 3;
        break;
      case "o":
        item = 4;
        break;
      case "u":
        item = 5;
        break;
    }
    return item;
  });
  return a.join("");
}

function decode(string) {
  let a = string.split("").map((item, index) => {
    switch (item) {
      case "1":
        item = "a";
        break;
      case "2":
        item = "e";
        break;
      case "3":
        item = "i";
        break;
      case "4":
        item = "o";
        break;
      case "5":
        item = "u";
        break;
    }
    return item;
  });
  return a.join("");
}

console.log(encode("edai"));
console.log(decode("143"));
