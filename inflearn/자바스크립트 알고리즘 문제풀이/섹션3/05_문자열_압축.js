// function solution(str) {
//   let answer = "";
//   let w = str[0];
//   const map = {
//     [w]: 1,
//   };

//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === w) {
//       map[str[i]]++;
//     } else {
//       w = str[i];
//       map[w] = 1;
//     }
//   }

//   for (const w in map) {
//     if (map[w] === 1) answer += w;
//     else answer += w + map[w];
//   }

//   return answer;
// }

function solution(str) {
  let answer = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += count === 1 ? str[i] : str[i] + String(count);
      count = 1;
    }
  }

  return answer;
}

console.log(solution("KKHSSSSSSSE"));
