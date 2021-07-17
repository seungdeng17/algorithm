function solution(need, plan) {
  let answer = "YES";
  const queue = need.split("");

  for (let p of plan) {
    if (queue.includes(p) && p !== queue.shift()) return "NO";
  }
  if (queue.length) return "NO";

  return answer;
}

console.log(solution("CBA", "CBDAGE"));
