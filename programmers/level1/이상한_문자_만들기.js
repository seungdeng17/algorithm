// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(str) {
  let answer = "";

  let isEven = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      answer += " ";
      isEven = true;
      continue;
    }
    if (isEven) {
      answer += str[i].toUpperCase();
      isEven = false;
    } else {
      answer += str[i].toLowerCase();
      isEven = true;
    }
  }

  return answer;
}

console.log(solution("try hello world"));
