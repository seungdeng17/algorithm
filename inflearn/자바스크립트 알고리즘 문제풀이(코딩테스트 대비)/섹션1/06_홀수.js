function solution(arr) {
  const oddArr = arr.filter((n) => n % 2 !== 0);
  const sum = oddArr.reduce((acc, n) => acc + n);
  const min = Math.min(...oddArr);
  return [sum, min];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
