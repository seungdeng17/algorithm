// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(str) {
  const stack = [];

  for (let s of str) {
    if (s === "(") {
      stack.push(s);
    } else {
      if (stack.length && stack[stack.length - 1] === "(") stack.pop();
      else return false;
    }
  }

  return !stack.length;
}

console.log(solution("()()"));
console.log(solution(")()("));
