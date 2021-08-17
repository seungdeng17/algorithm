function solution(arr) {
  let prevHeight = 0;
  return arr.reduce((acc, n) => {
    if (prevHeight < n) {
      prevHeight = n;
      acc += 1;
    }
    return acc;
  }, 0);
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
