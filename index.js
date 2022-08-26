function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split("");
  let newArray = [...wordArray];
  newArray = newArray.reverse(); 
  
  let status = JSON.stringify(wordArray)  === JSON.stringify(newArray) ? true : false; 
  return status;
}


/* 
  Add your pseudocode here
  1. Split the word into characters and store them in an array
  2. Create a new array using the same elements as the original array
  3. Reverse the new array
  4. Compare the two arrays
  5. Return true if the arrays match and false if they dont
*/

/*
  Add written explanation of your solution here
  The array passed in isPalindrome() is split using the split() method and stored in a variable called wordArray. 
  A replica of wordArray is created using the spread operator and stored in a variable called newArray. 
  Elements in newArray are reversed using the reverse() method. The two array are then compared using a ternary operator that returns true if the elements of the two arrays match and false if the don't. The result is then stored in a variable called status.
  The function then terminates by returning the status variable.
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
