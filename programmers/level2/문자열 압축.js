// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  let answer = s.length;

  for (let r = 1; r < s.length; r++) answer = Math.min(answer, compress(r));

  function compress(r) {
    let str = "";

    let currS = s.substr(0, r);
    let currCnt = 1;
    for (let i = r; i < s.length; i += r) {
      const _s = s.substr(i, r);
      if (_s === currS) {
        currCnt++;
      } else {
        str += (currCnt > 1 ? String(currCnt) : "") + currS;
        currS = _s;
        currCnt = 1;
      }
    }
    if (currCnt > 1) str += String(currCnt) + currS;
    else str += currS;

    return str.length;
  }

  return answer;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("acacacbacacac"));
