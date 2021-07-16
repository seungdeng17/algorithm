function solution(str) {
  let answer = "";
  let count = 0;
  const map = new Map();

  for (let s of str) {
    if (!map.has(s)) map.set(s, 1);
    else map.set(s, map.get(s) + 1);
  }

  for (let [n, c] of map) {
    if (count < c) {
      answer = n;
      count = c;
    }
  }

  return answer;
}

console.log(solution("BACBACCACCBDEDE"));
