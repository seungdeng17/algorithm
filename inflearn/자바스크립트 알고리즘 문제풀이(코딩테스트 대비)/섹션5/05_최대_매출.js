function solution(arr, day) {
  let sum = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    const _sum = arr[i] + arr[i + day - 2] + arr[i + day - 1];
    sum = Math.max(sum, _sum);
  }
  return sum;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
