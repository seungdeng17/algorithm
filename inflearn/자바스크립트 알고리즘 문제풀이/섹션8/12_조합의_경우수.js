function solution(n, r) {
  const metrix = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));

  function DFS(n, r) {
    if (r === 0 || n === r) return 1;
    if (metrix[n][r]) return metrix[n][r];
    const tmp = DFS(n - 1, r - 1) + DFS(n - 1, r);
    metrix[n][r] = tmp;
    return tmp;
  }
  return DFS(n, r);
}

console.log(solution(5, 3));
console.log(solution(33, 19));
