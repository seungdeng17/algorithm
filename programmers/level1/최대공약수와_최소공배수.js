// https://programmers.co.kr/learn/courses/30/lessons/12940

// function solution(n, m) {
//   const tmp1 = [];
//   const tmp2 = [];
//   for (let i = 1; i <= n; i++) if (n % i === 0) tmp1.unshift(i);
//   for (let i = 1; i <= m; i++) if (m % i === 0) tmp2.unshift(i);

//   let a = -1;
//   let p1 = 0;
//   let p2 = 0;
//   while (p1 < tmp1.length && p2 < tmp2.length) {
//     if (tmp1[p1] === tmp2[p2]) {
//       a = tmp1[p1];
//       break;
//     } else if (tmp1[p1] > tmp2[p2]) p1++;
//     else p2++;
//   }

//   let b = -1;
//   p1 = n;
//   p2 = m;
//   while (true) {
//     if (p1 === p2) {
//       b = p1;
//       break;
//     } else if (p1 > p2) p2 += m;
//     else p1 += n;
//   }

//   return [a, b];
// }

function solution(a, b) {
  function gcd(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    if (min === 0) return max;
    else return gcd(min, max % min);
  }

  return [gcd(a, b), (a * b) / gcd(a, b)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
