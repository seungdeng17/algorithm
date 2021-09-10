// https://programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
  let alphabetCnt = 0;
  for (let s of name) {
    let n = s.charCodeAt() - 65;
    if (n > 13) n = 26 - n;
    alphabetCnt += n;
  }

  let moveCnt = name.length - 1;
  for (let i = 0; i < name.length; i++) {
    let nextIdx = i + 1;
    while (nextIdx < name.length && name[nextIdx] === "A") nextIdx++;
    moveCnt = Math.min(moveCnt, i * 2 + name.length - nextIdx);
  }

  return alphabetCnt + moveCnt;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
console.log(solution("BBBBAABBB"));
console.log(solution("BBBAAB"));
console.log(solution("ABAAABABA"));
console.log(solution("ABABAAAAAAABA"));
