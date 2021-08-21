// https://programmers.co.kr/learn/courses/30/lessons/17684

function solution(str) {
  const answer = [];

  const map = new Map();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 1; i <= alphabet.length; i++) map.set(alphabet[i - 1], i);

  for (let i = 0; i < str.length; i++) {
    let tmp = str[i];
    for (let j = i + 1; j < str.length; j++) {
      const w = tmp + str[j];
      const n = map.get(w);
      if (n) {
        i++;
        tmp += str[j];
        continue;
      } else {
        map.set(w, map.size + 1);
        break;
      }
    }
    answer.push(map.get(tmp));
  }

  return answer;
}

console.log(solution("KAKAO"));
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
