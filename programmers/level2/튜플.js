// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  return s
    .match(/\{[\d|\,]+\}/g)
    .map((s) => s.replace(/\{|\}/g, "").split(","))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, tuple) => {
      for (const t of tuple) {
        if (acc.includes(+t)) continue;
        acc.push(+t);
      }
      return acc;
    }, []);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
