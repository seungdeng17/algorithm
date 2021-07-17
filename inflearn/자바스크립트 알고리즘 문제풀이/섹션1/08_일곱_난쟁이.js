function solution(arr) {
  const sum = arr.reduce((acc, n) => acc + n);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
      }
    }
  }
  return arr;
}

console.log(solution([20, 7, 23, 19, 10, 15, 8, 13, 25]));
