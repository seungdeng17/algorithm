// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(str, n) {
  let answer = "";

  for (let s of str) {
    if (s === " ") {
      answer += " ";
      continue;
    }
    const code = s.charCodeAt();
    let tmp = code + n;
    if (code >= 65 && code <= 90) {
      if (tmp > 90) tmp = tmp - 90 - 1 + 65;
    } else if (code >= 97 && code <= 122) {
      if (tmp > 122) tmp = tmp - 122 - 1 + 97;
    }
    answer += String.fromCharCode(tmp);
  }

  return answer;
}

console.log(solution("AB", 1));
