function myFunction(number) {
  if (number > 10) {
    return;
  }
  console.log(number);
  myFunction(number + 1);
}

myFunction(1);

// for문으로 구현
/*
 for (let i = 1; i < 11; i++) {
  console.log(i);
 } 
 */
