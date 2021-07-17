// function solution(n, m) {
//   const queue = Array.from({ length: n }, (_, i) => i + 1);

//   let i = 0;
//   while (queue.length !== 1) {
//     const q = queue.shift();
//     if (i !== m - 1) {
//       queue.push(q);
//       i++;
//     } else {
//       i = 0;
//     }
//   }

//   return queue[0];
// }

function solution(n, m) {
  const queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length !== 1) {
    for (let i = 0; i < m - 1; i++) queue.push(queue.shift());
    queue.shift();
  }

  return queue[0];
}

console.log(solution(8, 3));
