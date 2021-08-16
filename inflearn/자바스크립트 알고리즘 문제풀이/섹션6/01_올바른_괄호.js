// function solution(bracket) {
//   const stack = [];

//   for (let i = 0; i < bracket.length; i++) {
//     if (bracket[i] === "(") stack.push(bracket[i]);
//     else if (stack.length && bracket[i] === ")") stack.pop();
//     else return "NO";
//   }

//   return stack.length ? "NO" : "YES";
// }

function solution(str) {
  const stack = [];

  for (let s of str) {
    if (s === "(") stack.push(s);
    else {
      if (!stack[stack.length - 1]) return "NO";
      stack.pop();
    }
  }

  return stack.length ? "NO" : "YES";
}

console.log(solution("(())()"));
console.log(solution("(()(()))(()"));
console.log(solution("(()(()))(()))))))))))))))))))))"));
console.log(solution(")())"));
console.log(solution("(()))("));
