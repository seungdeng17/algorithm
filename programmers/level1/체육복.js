// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  const arr = Array.from({ length: n + 1 }, () => 1);
  arr[0] = 0;
  reserve.forEach((s) => arr[s]++);
  lost.forEach((s) => arr[s]--);

  for (let i = 1; i <= n; i++) {
    if (!arr[i]) {
      if (arr[i - 1] === 2) {
        arr[i] = 1;
        arr[i - 1] = 1;
        continue;
      }
      if (arr[i + 1] === 2) {
        arr[i] = 1;
        arr[i + 1] = 1;
        continue;
      }
    }
  }

  return arr.filter((n) => n).length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
