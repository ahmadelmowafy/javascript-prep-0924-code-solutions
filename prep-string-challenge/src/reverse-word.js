/* exported reverseWord */
function reverseWord(word) {
  const reversedLetters = [];
  for (let i = word.length - 1; i >= 0; i--) {
    reversedLetters.push(word[i]);
  }
  return reversedLetters.join('');
}
