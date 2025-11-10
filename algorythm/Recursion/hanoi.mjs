/**
 * 하노이 탑
 * 1. 한 번에 하나의 원반을 움직일 수 있다
 * 2. 가장 위에 있는 원반만 옮길 수 있다
 * 3. 아래에 작은 원반이 올 수 없다
 */
function hanoi(count, from, to, temp) {
  if (count === 0) {
    return;
  }

  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
}

hanoi(3, "A", "C", "B");
