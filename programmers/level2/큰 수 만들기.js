// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const answer = [];

  const arr = number.split("");
  let idx = 0;
  for (let i = 0; i < arr.length - k; i++) {
    let n = -1;
    let _idx = 0;
    for (let j = idx; j <= k + i; j++) {
      if (n === "9") break;
      if (arr[j] <= n) continue;
      n = arr[j];
      _idx = j;
    }
    idx = _idx;
    answer[i] = arr[idx];
    arr[idx] = "-1";
  }

  return answer.join("");
}

console.log(solution("1924", 2));
