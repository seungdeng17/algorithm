// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 1;

  const tmp = [];
  function DFS(L, sum) {
    if (L - tmp[tmp.length - 1] > 1 || L === n || sum > n) return;
    if (sum === n) {
      answer++;
      return;
    }
    tmp.push(L);
    DFS(L + 1, sum + L);
    tmp.pop();
    DFS(L + 1, sum);
  }
  DFS(1, 0);

  return answer;
}

console.log(solution(10000));
