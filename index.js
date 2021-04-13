function sayWhat() {
  console.log("what");
}
function sayHello() {

  console.log("HI");
}
function sayDad() {
  console.log("dad");
}
function sayHToilet() {
  console.log("toilet");
}


console.log("hasan")

}

function pigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    return str + 'way';
  } else {
    constanants = str.match(/^[^(aeiou)]+/);
    str = str.replace(constanants[0], '');
    return str + constanants[0] + 'ay';
  }
}


module.exports = { sayHello, pigLatin };


