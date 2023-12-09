/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(ch){
  const char = ch.toUpperCase();
  return (char === "A" || char === "I" || char === "O" || char === "E" || char === "U");
}

function countVowels(str) {
  let count = 0;
  for(const i of str){
    if(isVowel(i)) count++;
  }

  return count;
}

module.exports = countVowels;