// function solution(n) {
//   let answer = 0;
//   while (n > 0) {
//     answer += n;
//     n--;
//   }
//   return answer;
// }

function solution(n) {
  if (n === 1) return n;
  return n + solution(n - 1);
}

console.log(solution(6));
