function SelectionSort(arr) {
  // 마지막 원소는 자동으로 정렬되기 때문에 arr.length - 1 만큼 반복
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;

    // i 값은 이미 minValueIndex에 저장했기 때문에 j의 초기값은 i+1로 설정
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }
}

let arr = [4, 2, 3, 1];

console.log("===== 정렬 전 =====");
console.log(arr);

SelectionSort(arr);

console.log("===== 정렬 후 =====");
console.log(arr);
