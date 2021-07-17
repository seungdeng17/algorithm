// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce((answer, n, i) => {
    answer += signs[i] ? n : n * -1;
    return answer;
  }, 0);
}
