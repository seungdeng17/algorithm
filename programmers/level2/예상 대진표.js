// https://programmers.co.kr/learn/courses/30/lessons/12985
// 풀이중

function solution(n, a, b) {
  let answer = 0;

  const queue = Array.from({ length: n }, (_, i) => i + 1);
  while (true) {
    answer++;
    const len = queue.length / 2;
    for (let i = 0; i < len; i++) {
      const p1 = queue.shift();
      const p2 = queue.shift();
      if ((p1 === a || p1 === b) && (p2 === a || p2 === b)) return answer;
      if (p1 === a || p1 === b) {
        queue.push(p1);
      } else if (p2 === a || p2 === b) {
        queue.push(p2);
      } else {
        queue.push(p1);
      }
    }
  }
}

console.log(solution(8, 4, 7));
