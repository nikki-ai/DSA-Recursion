// Write a recursive function that counts 
// how many sheep jump over the fence. 
// Your program should take a number as input. 
// That number should be the number of sheep 
// you have. The function should display the 
// number along with the message 
// "Another sheep jumps over the fence" 
// until no more sheep are left.

function countingSheep(num) {
  if (num === 0) {
    return console.log('All sheep jumped');
  } else {
    console.log(num, 'Another sheep jumps over the fence');
    countingSheep(num - 1);
  }
}

countingSheep(3);
