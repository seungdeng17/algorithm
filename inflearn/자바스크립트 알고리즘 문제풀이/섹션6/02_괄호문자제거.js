// function solution(str) {
//   let answer = "";
//   const stack = [];

//   for (let s of str) {
//     if (s === "(") stack.push([]);
//     else if (s === ")") stack.pop();
//     else if (stack.length) stack[stack.length - 1].push(s);
//     else answer += s;
//   }

//   return answer;
// }

function solution(str) {
  const stack = [];

  for (let s of str) {
    if (s === ")") while (stack.pop() !== "(");
    else stack.push(s);
  }

  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
