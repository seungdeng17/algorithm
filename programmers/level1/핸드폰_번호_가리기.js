// https://programmers.co.kr/learn/courses/30/lessons/12948

// function solution(phone_number) {
//   let p = phone_number.split("");
//   for (let i = 0; i < p.length; i++) {
//     if (p.length - i === 4) return p.join("");
//     p[i] = "*";
//   }
// }

function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
