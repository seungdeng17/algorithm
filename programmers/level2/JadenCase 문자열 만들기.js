// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(str) {
  let answer = "";

  let trigger = true;
  for (let s of str) {
    if (s === " ") {
      trigger = true;
      answer += " ";
      continue;
    }
    if (trigger) {
      answer += s.toUpperCase();
      trigger = false;
    } else answer += s.toLowerCase();
  }

  return answer;
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
console.log(solution("hello my          friend"));
