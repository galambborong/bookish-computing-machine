function sayHello() {
  console.log('HI');
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
