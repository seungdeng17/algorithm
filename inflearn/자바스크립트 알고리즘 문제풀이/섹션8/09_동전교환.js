function solution(arr, money) {
  let answer = Number.MAX_SAFE_INTEGER;
  const tmp = [];

  function DFS(i, sum) {
    if (money < sum || answer < i) return;
    if (money === sum) {
      answer = Math.min(answer, tmp.length);
      return;
    }

    for (let j = 0; j < arr.length; j++) {
      tmp.push(arr[j]);
      DFS(i + 1, sum + arr[j]);
      tmp.pop();
    }
  }
  DFS(0, 0);

  return answer;
}

console.log(solution([1, 2, 5], 15));
