// https://programmers.co.kr/learn/courses/30/lessons/17687
// 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다.

// function solution(n, t, m, p) {
//   let answer = "";

//   let tmp = "";
//   for (let i = 0; i <= t * m; i++) tmp += i.toString(n).toUpperCase();
//   for (let i = p; answer.length !== t; i += m) answer += tmp[i - 1];

//   return answer;
// }

function solution(n, t, m, p) {
  let answer = "";

  let tmp = "";
  for (let i = 0; i <= t * m; i++) tmp += getNotation(n, i);
  for (let i = p; answer.length !== t; i += m) answer += tmp[i - 1];

  function getNotation(a, b) {
    if (n >= 10 && b >= 10 && b < n) return NOTATION[b];
    if (a > b) return String(b);
    return (
      getNotation(a, parseInt(b / a)) +
      (NOTATION[String(b % a)] || String(b % a))
    );
  }

  return answer;
}

const NOTATION = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));
