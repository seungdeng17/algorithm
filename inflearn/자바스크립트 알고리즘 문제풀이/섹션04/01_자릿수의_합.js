// function solution(arr) {
//   let answer = 0;

//   let temp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const sum = String(arr[i])
//       .split("")
//       .reduce((acc, n) => +acc + +n);
//     if (temp < sum) {
//       temp = sum;
//       answer = arr[i];
//     } else if (temp === sum) {
//       answer = answer < arr[i] ? arr[i] : answer;
//     }
//   }

//   return answer;
// }
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  let tmp = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    const n = String(arr[i]);
    let sum = 0;
    for (let j = 0; j < n.length; j++) sum += parseInt(n[j]);
    if (sum >= tmp) {
      tmp = sum;
      answer = Math.max(answer, n);
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
