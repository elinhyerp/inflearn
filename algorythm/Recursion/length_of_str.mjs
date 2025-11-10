function strLength(str) {
  if (str === "") {
    return 0;
  }

  return strLength(str.slice(0, -1)) + 1;
}

let str = "abcde";
let len = strLength(str);
console.log(len);
