function factorial(number) {
  if (number === 1 || number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5));

// for문으로 구현
/*
function factorial(number) {
  let sum = 1;

  for (let i = 1; i <= number; i++) {
    sum *= 1;
  }

  return sum
}
*/
