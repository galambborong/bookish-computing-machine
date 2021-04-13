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

const alphabetReplace = (str) => {
  let indexString = '';
  let charArray = str.split('');

  charArray.forEach((element, i) => {
    if (element.charCodeAt(0) > 90 && element.charCodeAt(0) !== 32) {
      indexString += element.charCodeAt(0) - 96;
    }
    if (element.charCodeAt(0) < 90 && element.charCodeAt(0) !== 32) {
      indexString += element.charCodeAt(0) - 64;
    }
    if (i < charArray.length - 1 && element.charCodeAt(0) !== 32) {
      indexString += ' ';
    }
  });
  return indexString;
};

  
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

module.exports = { sayHello, pigLatin, alphabetReplace, sayWhat };

