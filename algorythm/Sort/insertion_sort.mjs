function InsertionSort(arr) {
  // 첫 번째 원소는 이미 정렬되어 있다고 가정하고 1부터 시작
  for (let i = 1; i < arr.length; i++) {
    let insertionData = arr[i];
    let j; // 삽입 위치
    // 정렬된 영역의 마지막 원소: 정렬되지 않은 영역의 첫 번째 원소의 한 칸 앞
    // 정렬되지 않은 영역의 원소: i
    // j를 i-1로 초기화 해 정렬된 영역의 맨 뒤로 설정
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > insertionData) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = insertionData;
  }
}

let arr = [4, 1, 5, 3, 6, 2];

console.log("===== 정렬 전 =====");
console.log(arr);

InsertionSort(arr);

console.log("===== 정렬 후 =====");
console.log(arr);
