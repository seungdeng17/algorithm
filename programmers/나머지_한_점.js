// https://programmers.co.kr/learn/courses/18/lessons/1878?language=javascript

// function solution(v) {
//   const answer = [];
//   const tmp = [];

//   for (let i = 0; i < v.length; i++) {
//     const j = i === v.length - 1 ? 0 : i + 1;
//     if (!(v[i][0] ^ v[j][0])) tmp[0] = v[i][0];
//     if (!(v[i][1] ^ v[j][1])) tmp[1] = v[i][1];
//   }
//   for (let [x, y] of v) {
//     if (tmp[0] !== x) answer[0] = x;
//     if (tmp[1] !== y) answer[1] = y;
//   }

//   return answer;
// }

function solution(v) {
  const answer = [];

  answer.push(v[0][0] ^ v[1][0] ^ v[2][0]);
  answer.push(v[0][1] ^ v[1][1] ^ v[2][1]);

  return answer;
}

console.log(
  solution([
    [1, 4],
    [3, 4],
    [3, 10],
  ])
);
