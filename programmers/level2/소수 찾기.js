// https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(str) {
  let answer = 0;

  const arr = str.split("");
  const prime = getPrime(+"".padEnd(arr.length, 9));

  const tmp = [];
  const ch = Array.from({ length: arr.length }, () => 0);
  function DFS(L, len) {
    if (tmp[0] === "0") return;
    if (L === len) {
      const n = +tmp.join("");
      if (prime[n] > 0) {
        answer++;
        prime[n] = -1;
      }
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (ch[i]) continue;
      ch[i] = 1;
      tmp.push(arr[i]);
      DFS(L + 1, len);
      ch[i] = 0;
      tmp.pop();
    }
  }
  for (let i = 1; i <= arr.length; i++) DFS(0, i);

  return answer;
}

function getPrime(n) {
  const dy = Array.from({ length: n + 1 }, () => 1);
  dy[0] = 0;
  dy[1] = 0;
  for (let i = 2; i <= n; i++) {
    if (!dy[i]) continue;
    for (let j = i * 2; j <= n; j += i) dy[j] = 0;
  }
  return dy;
}

console.log(solution("17"));
console.log(solution("011"));
console.log(solution("1234567"));
