function solution(n, arr) {
  const answer = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        answer.add(sum);
      }
    }
  }

  return [...answer].sort((a, b) => b - a)[n - 1];
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
