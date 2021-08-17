function solution(exp) {
  const stack = [];

  for (let k of exp) {
    if (isNaN(k)) {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(calc(+a, +b, k));
    } else {
      stack.push(k);
    }
  }

  return stack[0];
}

function calc(a, b, k) {
  switch (k) {
    case "+":
      return b + a;
    case "-":
      return b - a;
    case "*":
      return b * a;
    case "/":
      return b / a;
  }
}

console.log(solution("352+*9-"));
