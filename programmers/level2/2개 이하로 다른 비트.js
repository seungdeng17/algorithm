// https://programmers.co.kr/learn/courses/30/lessons/77885

// function solution(arr) {
//   return arr.map((n) => {
//     const nb = getBinary(n);
//     let m = n + 1;
//     while (true) {
//       const mb = getBinary(m);
//       const _nb = nb.padStart(mb.length, 0);
//       let cnt = 0;
//       for (let i = 0; i < mb.length; i++) {
//         if (cnt > 2) break;
//         if (mb[i] !== _nb[i]) cnt++;
//       }
//       if (cnt >= 1 && cnt <= 2) break;
//       m++;
//     }
//     return m;
//   });
// }

// function getBinary(n) {
//   if (n <= 1) return String(n);
//   return getBinary(parseInt(n / 2)) + String(n % 2);
// }

function solution(arr) {
  return arr.map((n) => {
    const isEven = !(n % 2);
    if (isEven) return n + 1;
    return n + 2 ** (n.toString(2).match(/([1]+)$/)[0].length - 1);
  });
}

console.log(solution([2, 7]));
