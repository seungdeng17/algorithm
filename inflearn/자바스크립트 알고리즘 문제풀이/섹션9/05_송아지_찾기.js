// function solution(s, e) {
//   let answer = 0;

//   let q1 = [s];
//   let q2 = [];
//   while (true) {
//     const v = q1.shift();
//     if (v === e) break;
//     for (let nv of [v + 1, v - 1, v + 5]) q2.push(nv);

//     if (q1.length) continue;
//     q1 = [...q2];
//     q2 = [];
//     answer++;
//   }

//   return answer;
// }

// function solution(s, e) {
//   const ch = Array.from({ length: e + 1 }, () => 0);
//   const dis = [];
//   const queue = [];
//   ch[s] = 1;
//   dis[s] = 0;
//   queue.push(s);

//   while (queue.length) {
//     const v = queue.shift();
//     for (let nv of [v + 1, v - 1, v + 5]) {
//       if (nv === e) return dis[v] + 1;
//       if (ch[nv]) continue;
//       ch[nv] = 1;
//       dis[nv] = dis[v] + 1;
//       queue.push(nv);
//     }
//   }
// }

function solution(s, e) {
  const ch = [];
  const queue = [s];

  let L = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const x = queue.shift();
      for (let nx of [x + 1, x - 1, x + 5]) {
        if (nx === e) return L + 1;
        if (ch[nx]) continue;
        ch[nx] = 1;
        queue.push(nx);
      }
    }
    L++;
  }
}

console.log(solution(5, 14));
console.log(solution(8, 3));
