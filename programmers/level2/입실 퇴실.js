// https://programmers.co.kr/learn/courses/30/lessons/86048

function solution(enter, leave) {
  const answer = [];

  const cntMap = {};
  for (const n of enter) cntMap[n] = 0;

  const room = [];
  let l = leave.shift();
  while (leave.length) {
    if (room.includes(l)) {
      answer[l - 1] = cntMap[l];
      room.splice(room.indexOf(l), 1);
      l = leave.shift();
      continue;
    }

    const e = enter.shift();
    room.push(e);
    cntMap[e] = room.length - 1;
    for (const key in cntMap) {
      if (+key === e || !room.includes(+key)) continue;
      cntMap[key]++;
    }
  }
  answer[l - 1] = cntMap[l];

  return answer;
}

console.log(solution([1, 3, 2], [1, 2, 3]));
console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]));
console.log(solution([1, 4, 2, 3], [2, 1, 4, 3]));
