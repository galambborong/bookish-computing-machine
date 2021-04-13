function getEvenNumbers(nums) {
    /*
      This function takes an array of integers and returns an array containing only even integers
    */
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

