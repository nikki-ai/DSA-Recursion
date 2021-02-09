// Write a function called powerCalculator() that
// takes two parameters, an integer as a base, and
// another integer as an exponent. The function returns
// the value of the base raised to the power of the exponent.
// Use only exponents greater than or equal to 0 (positive numbers)

function powerCalculator(base, exp) {
  if (exp === 1) {
    return base;
  } else if (exp <= 0) {
    return 0;
  }

  // 10 * 10 * 1
  return base * powerCalculator(base, exp - 1);
}

console.log(powerCalculator(10, 0)); // 0
console.log(powerCalculator(10, 1)); // 10
console.log(powerCalculator(10, 2)); // 100
console.log(powerCalculator(10, 3)); // 1000

// Call Stack
// 10, 0 return 1
// 10, 1 return 10
// 10, 2 return 100

// Takeaways are that recursive functions manipulate state
// As they call themselves again until a base case is reached
// and then the call stack unravels to complete stored operations. 