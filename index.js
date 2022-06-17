function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split("").reverse().join("");
  if(reversed === word){
    return true;
  }else{
    return false;
  }
}




/* 
  Add your pseudocode here
  Convert the input string into lowercase and assign it to a variable called lowerCase
  Split lowerCase into an array and assign it to another avariable myArray
  Create a copy of myArray using the spread operator and assign it to arrayCopy
  Reverse arrayCopy
  Check whether myArray equals arrayCopy
    if the two arrays are equal return true
    Return false if not.

*/

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
