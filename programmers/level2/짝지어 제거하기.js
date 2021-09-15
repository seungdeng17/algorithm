// https://programmers.co.kr/learn/courses/30/lessons/12973
// 풀이중

function solution(s) {
  const sArr = s.split("");
  const stack = [];
  while (sArr.length) {
    const s = sArr.shift();
    if (stack[stack.length - 1] === s) stack.pop();
    else stack.push(s);
  }
  return +!stack.length;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
