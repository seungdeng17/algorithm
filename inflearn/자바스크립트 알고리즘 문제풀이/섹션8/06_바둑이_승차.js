function solution(limit, arr) {
  let answer = 0;

  function DFS(i, sum) {
    if (sum > limit) return;
    if (i >= arr.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(i + 1, sum + arr[i]);
      DFS(i + 1, sum);
    }
  }
  DFS(0, 0);

  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
