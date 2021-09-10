// https://programmers.co.kr/learn/courses/30/lessons/12985

// function solution(n, a, b) {
//   let answer = 0;

//   const queue = Array.from({ length: n }, (_, i) => i + 1);
//   while (true) {
//     answer++;
//     const len = queue.length / 2;
//     for (let i = 0; i < len; i++) {
//       const p1 = queue.shift();
//       const p2 = queue.shift();
//       if ((p1 === a || p1 === b) && (p2 === a || p2 === b)) return answer;
//       if (p1 === a || p1 === b) {
//         queue.push(p1);
//       } else if (p2 === a || p2 === b) {
//         queue.push(p2);
//       } else {
//         queue.push(p1);
//       }
//     }
//   }
// }

function solution(n, a, b) {
  let answer = 0;

  while (true) {
    answer++;
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    if (max - min === 1 && max % 2 === 0) {
      return answer;
    } else {
      a = a % 2 === 0 ? a / 2 : parseInt(a / 2) + 1;
      b = b % 2 === 0 ? b / 2 : parseInt(b / 2) + 1;
    }
  }
}

console.log(solution(8, 4, 7));
