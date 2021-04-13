function sayHello() {
  console.log('hi');
}

module.exports = { sayHello };

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

module.exports = { alphabetReplace };
