// // function solution(bracket) {
// //   let answer = 0;
// //   const stack = [];

// //   for (let i = 0; i < bracket.length; i++) {
// //     if (bracket[i] === ")") {
// //       if (bracket[i - 1] === "(") {
// //         stack.pop();
// //         answer += stack.length;
// //       } else {
// //         stack.pop();
// //         answer++;
// //       }
// //     } else {
// //       stack.push(bracket[i]);
// //     }
// //   }

// //   return answer;
// // }

// function solution(bracket) {
//   let answer = 0;
//   const stack = [];

//   for (let i = 0; i < bracket.length; i++) {
//     if (bracket[i] === "(") stack.push(bracket[i]);
//     else if (bracket[i - 1] === "(") {
//       stack.pop();
//       answer += stack.length;
//     } else {
//       stack.pop();
//       answer++;
//     }
//   }

//   return answer;
// }

function solution(str) {
  let answer = 0;

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      if (str[i - 1] === ")") answer++;
      else answer += stack.length;
    }
  }

  return answer;
}

console.log(solution("(())"));
console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
