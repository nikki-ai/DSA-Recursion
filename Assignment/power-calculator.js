// Write a function called powerCalculator() that
// takes two parameters, an integer as a base, and
// another integer as an exponent. The function returns
// the value of the base raised to the power of the exponent.
// Use only exponents greater than or equal to 0 (positive numbers)

function powerCalculator(base, exp) {
  let ans;
  if (exp < 0) {
    return console.log('exponent should be >= 0');
  } else {
    powerCalculator((ans = Math.pow(base, exp)));
    console.log(ans);
  }
}

powerCalculator(10, -2);
