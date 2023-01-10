function reverseString(str) {
  // type your code here
  if (str === "") {
    return "";
  }
  str = str.toLowerCase();
  let newString = ""; 
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i])
    newString += str[i]
  }
  console.log(newString)
}
//reverseString("catbaby");
  reverseString("ybabtac")

// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: 'ih'");
//   console.log("=>", reverseString("hi"));

//   console.log("");

//   console.log("Expecting: 'ybabtac'");
//   console.log("=>", reverseString("catbaby"));
// }

// module.exports = reverseString;

// Please add your pseudocode to this file

/*
  for loop to iterate through array, starting at i = 1
    unshift string[i] to place letter at start of string
    then string.slice(i, 1) to remove the letter at its previous position


    extra test cases... check for capital letters? string = string.toLowerCase()

*/

// And a written explanation of your solution

/*
  *No use of any built-in reverse methods*

  The function reverseString takes in one argument, the string to be reversed
  The function needs to reverse the order of the letters and return true if it's correctly reversed
  False otherwise
  The function will iterate through the length all the letters in the string
  In the loop, I will unshift() the letter to the front of the word and then delete the letter
  The loop will start at index 1 as the first letter is already at the start
  And then using unshift on each remaining letter will put them into reverse order
*/