// https://programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  function DFS(p) {
    if (!p) return "";
    if (checker(p) < 0) return p;

    const map = new Map();
    let i;
    for (i = 0; i < p.length; i++) {
      if (!map.has(p[i])) map.set(p[i], 1);
      else map.set(p[i], map.get(p[i]) + 1);
      if (map.get("(") === map.get(")")) {
        i++;
        break;
      }
    }

    let u = p.substr(0, i);
    let v = p.substr(i);

    if (checker(u) < 0) return u + DFS(v);
    else {
      let _u = "";
      for (let i = 1; i < u.length - 1; i++) _u += u[i] === ")" ? "(" : ")";
      return "(" + DFS(v) + ")" + _u;
    }
  }

  return DFS(p);
}

function checker(p) {
  let idx = -1;
  const stack = [];
  for (let i = 0; i < p.length; i++) {
    const s = p[i];
    if (s === "(") stack.push(s);
    else {
      if (stack[stack.length - 1] === "(") stack.pop();
      else {
        idx = i;
        break;
      }
    }
  }
  return idx;
}

console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));
