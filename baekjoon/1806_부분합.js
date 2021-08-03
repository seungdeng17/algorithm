// function solution(m, arr) {
//   let answer = Number.MAX_SAFE_INTEGER;

//   let lt = 0;
//   let rt = 0;
//   while (rt < arr.length) {
//     let sum = 0;
//     for (let i = lt; i <= rt; i++) sum += arr[i];

//     if (sum >= m) {
//       answer = Math.min(answer, rt - lt + 1);
//       lt++;
//     } else rt++;
//   }

//   return answer;
// }

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  let lt = 0;
  let rt = 0;
  let sum = 0;
  while (rt < arr.length) {
    if (sum < m) sum += arr[rt++];
    else sum -= arr[lt++];

    if (sum >= m) answer = Math.min(answer, rt - lt);
  }

  return answer;
}

console.log(solution(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]));
