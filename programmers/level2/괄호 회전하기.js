// https://programmers.co.kr/learn/courses/30/lessons/76502

function solution(str) {
  let answer = 0;

  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.shift());
    if (checker(arr.join(""))) answer++;
  }

  return answer;
}

function checker(str) {
  if (str.length === 1) return false;
  const stack = [];
  const c = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  for (let s of str) {
    if (s.match(/\[|\(|\{/)) stack.push(s);
    else {
      if (c[s] !== stack[stack.length - 1]) return false;
      stack.pop();
    }
  }
  return stack.length ? false : true;
}

console.log(solution("[](){}"));
