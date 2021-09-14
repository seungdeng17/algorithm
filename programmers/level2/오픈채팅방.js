// https://programmers.co.kr/learn/courses/30/lessons/42888

const ENTER = "님이 들어왔습니다.";
const LEAVE = "님이 나갔습니다.";

function solution(record) {
  const answer = [];

  const map = new Map();
  for (const data of record) {
    const [cmd, uid, name] = data.split(" ");
    if (name) map.set(uid, name);
    if (cmd !== "Change") answer.push([cmd, uid]);
  }

  return answer.map(
    ([cmd, uid]) => map.get(uid) + (cmd === "Enter" ? ENTER : LEAVE)
  );
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
