function solution(a, b, c) {
  return [...arguments].reduce((acc, n) => {
    if (acc > n) acc = n;
    return acc;
  });
}

console.log(solution(6, 5, 11));
