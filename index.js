function isPalindrome(word) {
const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString  = reverseLetters.join('')

  if (word == reverseString){

    return true

  } else {
    return false
  }

}

/* 
  Add your pseudocode here
*/
Function isPalindrome takes a string as a paremeter. If the string is palindrom, the function returns true. If not, the function should return false
*/

/*
  The function takes the word and splits each letter into an array, then the array is reversed. The array is then joined again into a word. Then we compare if the orginal word is the same as the reversed word. If true then it returns true, or else it will return false
*/
// You can run `node index.js` to view these console logs
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
