function solution(a, b, c) {
  const [l1, l2, l3] = [...arguments].sort((a, b) => a - b);
  return l1 + l2 > l3 ? "YES" : "NO";
}

console.log(solution(6, 7, 11));
