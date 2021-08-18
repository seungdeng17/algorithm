// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(str) {
  return str
    .split("")
    .sort((a, b) => {
      return b.charCodeAt() - a.charCodeAt();
    })
    .join("");
}

console.log(solution("Zbcdefg"));
