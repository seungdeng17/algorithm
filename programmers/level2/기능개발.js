// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];

  const days = [];
  while (progresses.length) {
    const p = progresses.shift();
    const s = speeds.shift();
    days.push(Math.ceil((100 - p) / s));
  }

  let tmp = days[0];
  let cnt = 1;
  for (let i = 1; i < days.length; i++) {
    if (days[i] <= tmp) cnt++;
    else {
      answer.push(cnt);
      tmp = days[i];
      cnt = 1;
    }
    if (i === days.length - 1) answer.push(cnt);
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
