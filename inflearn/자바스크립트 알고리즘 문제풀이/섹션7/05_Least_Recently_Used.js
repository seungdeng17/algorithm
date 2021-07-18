// function solution(size, arr) {
//   const answer = [];

//   arr.forEach((cmd) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (answer[i] === cmd) pos = i;
//     if (pos === -1) {
//       answer.unshift(cmd);
//       if (answer.length > size) answer.pop();
//     } else {
//       answer.splice(pos, 1);
//       answer.unshift(cmd);
//     }
//   });

//   return answer;
// }

function solution(size, arr) {
  const answer = Array.from({ length: size }, () => 0);

  arr.forEach((cmd) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (answer[i] === cmd) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 0; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 0; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = cmd;
  });

  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
