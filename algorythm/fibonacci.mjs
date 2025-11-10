function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciMemoization(n, memo) {
  if (n === 0 || n === 1) {
    return n;
  }

  if (memo[n] === undefined) {
    memo[n] =
      fibonacciMemoization(n - 2, memo) + fibonacciMemoization(n - 1, memo);
  }

  return memo[n];
}

function fibonacciTabulation(n) {
  if (n <= 1) {
    return n;
  }

  let table = [0, 1];

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }

  return table[n];
}

let start = new Date();
console.log(fibonacci(40));
let end = new Date();
console.log(`fibonacci 함수 실행 시간: ${end - start}ms`);

start = new Date();
console.log(fibonacciMemoization(40, {}));
end = new Date();
console.log(`fibonacciMemoization 함수 실행 시간: ${end - start}ms`);

start = new Date();
console.log(fibonacciTabulation(40));
end = new Date();
console.log(`fibonacciTabulation 함수 실행 시간: ${end - start}ms`);
