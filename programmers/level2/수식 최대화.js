// https://programmers.co.kr/learn/courses/30/lessons/67257

function solution(expression) {
  let answer = Number.MIN_SAFE_INTEGER;

  const expressionArr = expression.split(/\b/);
  const operators = ["*", "+", "-"];
  const operatorPermutations = [];
  const tmp = [];
  const ch = [];
  getOperatorPermutation(0); // 연산자 순열 조합 구하기

  for (const ops of operatorPermutations) {
    let tmp1 = [...expressionArr];
    let tmp2 = [];
    for (const currOp of ops) {
      while (tmp1.includes(currOp)) {
        const n1 = Number.isNaN(+tmp1[0]) ? tmp2.pop() : tmp1.shift(); // 계산된 값이 이미 존재할 때 계산 된 값을 담아둔 임시 배열의 값을, 그렇지 않을 때 기존 수식에서 값을 가져옴
        const op = tmp1.shift();
        if (op !== currOp) {
          for (const t of [n1, op]) tmp2.push(t);
          continue; // 우선 순위 연산자가 아니면 스킵
        }
        const n2 = tmp1.shift();
        tmp2.push(calc(n1, n2, op));
      }
      tmp1 = [...tmp2, ...tmp1]; // 우선 순위 연산이 종료되면 다시 합체
      tmp2 = [];
    }
    answer = Math.max(answer, Math.abs(tmp1[0]));
  }

  function getOperatorPermutation(L) {
    if (L === operators.length) return operatorPermutations.push([...tmp]);
    for (let i = 0; i < operators.length; i++) {
      if (ch[i]) continue;
      ch[i] = 1;
      tmp[L] = operators[i];
      getOperatorPermutation(L + 1);
      ch[i] = 0;
    }
  }

  return answer;
}

function calc(a, b, o) {
  switch (o) {
    case "+":
      return +a + +b;
    case "-":
      return +a - +b;
    case "*":
      return +a * +b;
  }
}

console.log(solution("100-200*300-500+20"));
