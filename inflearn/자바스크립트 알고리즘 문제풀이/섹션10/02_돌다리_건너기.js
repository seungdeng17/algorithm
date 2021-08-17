// function solution(n) {
//   const dy = [];

//   dy[1] = 1;
//   dy[2] = 2;

//   for (let i = 3; i <= n + 1; i++) {
//     dy[i] = dy[i - 2] + dy[i - 1];
//   }

//   return dy[n + 1];
// }

function solution(n) {
  const dy = [];

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  return dy[n + 1];
}

console.log(solution(7));
