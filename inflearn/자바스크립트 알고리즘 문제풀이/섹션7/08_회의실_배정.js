// function solution(arr) {
//   const answer = [];

//   arr.sort((a, b) => {
//     const [aSt, aEt] = a;
//     const [bSt, bEt] = b;
//     if (aEt === bEt) return aSt - bSt;
//     return aEt - bEt;
//   });

//   let et = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][0] >= et) {
//       answer.push(arr[i]);
//       et = arr[i][1];
//     }
//   }

//   return answer;
// }

function solution(arr) {
  let answer = 0;

  arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let tmp = Number.MIN_SAFE_INTEGER;
  for (let [s, e] of arr) {
    if (s >= tmp) {
      console.log(s, e);
      tmp = e;
      answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
