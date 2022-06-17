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
  =>Split, reverse and join the input string and assign the result to a variable named reversed
  => compare if reverse is equal to word
  =>if equal return true
  => if not return false


*/

/*
  Add written explanation of your solution here
  I have used the split() method to split the input string into an array.The reverse method reverses the
  order of elements in the array. The join method transforms the reversed array into a string.
  I have used the strict equality operator to compare the two strings i.e the input and the its
  reversed version.

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
