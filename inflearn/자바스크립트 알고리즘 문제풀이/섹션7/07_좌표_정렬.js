// function solution(arr) {
//   return arr.sort((a, b) => {
//     const [aX, aY] = a;
//     const [bX, bY] = b;
//     if (aX === bX) return aY - bY;
//     return aX - bX;
//   });
// }

function solution(arr) {
  return arr.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
}

console.log(
  solution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
