function solution(n, m) {
  const answer = [];

  const queue = [n];
  while (queue.length) {
    const v = queue.shift();
    answer.push(v);
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > m) continue;
      queue.push(nv);
    }
  }

  return answer;
}

console.log(solution(1, 7));
