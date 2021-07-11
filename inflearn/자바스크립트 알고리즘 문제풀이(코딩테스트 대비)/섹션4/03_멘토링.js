function solution(arr) {
  const answer = [];

  for (let i = 1; i <= arr[0].length; i++) {
    for (let j = 1; j <= arr[0].length; j++) {
      let count = 0;
      let pi;
      let pj;
      for (let k = 0; k < arr.length; k++) {
        for (let s = 0; s < arr[0].length; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === arr.length) answer.push([i, j]);
    }
  }

  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
