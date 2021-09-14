// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;

  const tmp = [];
  const ch = [];
  function DFS(L) {
    if (L === numbers.length) return tmp.push([...ch]);
    ch[L] = 1;
    DFS(L + 1);
    ch[L] = 0;
    DFS(L + 1);
  }
  DFS(0, 0);

  for (const p of tmp) {
    let sum = 0;
    for (let i = 0; i < p.length; i++) {
      sum += p[i] ? numbers[i] : -numbers[i];
    }
    if (sum === target) answer++;
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
