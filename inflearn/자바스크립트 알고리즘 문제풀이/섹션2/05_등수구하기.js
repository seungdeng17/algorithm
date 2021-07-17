function solution(arr) {
  return arr
    .slice()
    .sort((a, b) => b - a)
    .map((n) => arr.indexOf(n) + 1);
}

console.log(solution([87, 89, 92, 100, 76]));
