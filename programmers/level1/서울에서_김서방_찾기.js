// https://programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

console.log(solution(["Jane", "Kim"]));
