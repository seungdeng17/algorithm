function solution(bracket) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === ")") {
      if (bracket[i - 1] === "(") {
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer++;
      }
    } else {
      stack.push(bracket[i]);
    }
  }

  return answer;
}

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
