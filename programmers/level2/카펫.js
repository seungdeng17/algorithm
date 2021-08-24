// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(a, b) {
  for (let i = 1; i <= parseInt(Math.sqrt(b)); i++) {
    const bw = b / i;
    const bh = i;
    if ((bw + 2 + bh) * 2 === a) return [bw + 2, bh + 2];
  }
}

console.log(solution(24, 24));
