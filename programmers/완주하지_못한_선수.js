// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    if (map.has(participant[i])) {
      map.set(participant[i], map.get(participant[i]) + 1);
    } else {
      map.set(participant[i], 1);
    }
  }
  for (let i = 0; i < completion.length; i++) {
    map.set(completion[i], map.get(completion[i]) - 1);
    if (!map.get(completion[i])) map.delete(completion[i]);
  }

  const [[answer]] = [...map];
  return answer;
}
