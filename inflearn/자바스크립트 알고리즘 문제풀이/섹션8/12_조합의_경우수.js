function solution(n, r) {
  const matrix = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));

  function DFS(n, r) {
    if (r === 0 || n === r) return 1;
    if (matrix[n][r]) return matrix[n][r];
    const tmp = DFS(n - 1, r - 1) + DFS(n - 1, r);
    matrix[n][r] = tmp;
    return tmp;
  }
  return DFS(n, r);
}

console.log(solution(3, 2));
console.log(solution(5, 3));
console.log(solution(33, 19));
