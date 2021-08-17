function solution(limit, arr) {
  let answer = 0;

  function DFS(i, score, time) {
    if (time > limit) return;
    if (i >= arr.length) {
      answer = Math.max(answer, score);
    } else {
      DFS(i + 1, score + arr[i][0], time + arr[i][1]);
      DFS(i + 1, score, time);
    }
  }
  DFS(0, 0, 0);

  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
