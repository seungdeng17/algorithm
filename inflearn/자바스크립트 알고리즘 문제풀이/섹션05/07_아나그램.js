// function solution(s1, s2) {
//   let result = true;
//   const m1 = new Map();
//   const m2 = new Map();

//   for (let i = 0; i < s1.length; i++) {
//     if (!m1.has(s1[i])) m1.set(s1[i], 1);
//     else m1.set(s1[i], m1.get(s1[i]) + 1);

//     if (!m2.has(s2[i])) m2.set(s2[i], 1);
//     else m2.set(s2[i], m2.get(s2[i]) + 1);
//   }

//   for (let [k, v] of m1) {
//     if (m2.get(k) !== v) {
//       result = false;
//       break;
//     }
//   }

//   return result ? "YES" : "NO";
// }

function solution(s1, s2) {
  let answer = "YES";
  const map = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (!map.has(s1[i])) map.set(s1[i], 1);
    else map.set(s1[i], map.get(s1[i]) + 1);
  }

  for (let i = 0; i < s2.length; i++) {
    if (!map.has(s2[i]) || map.get(s2[i]) === 0) return "NO";
    map.set(s2[i], map.get(s2[i]) - 1);
  }

  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
