// Write a function that reverses a string.
// Take a string as input, reverse the string, and return
// the new string.

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.slice(1)) + string[0];
  }
}

console.log(reverseString('hello'));