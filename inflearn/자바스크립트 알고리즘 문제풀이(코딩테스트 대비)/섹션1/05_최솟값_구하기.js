function solution(arr) {
  return arr.reduce((acc, n) => {
    if (acc > n) acc = n;
    return acc;
  });
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
