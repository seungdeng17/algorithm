// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  return [
    ...s
      .match(/\{[\d|\,]+\}/g) // 중괄호 단위로 분리
      .map((s) => s.replace(/\{|\}/g, "").split(","))
      .sort((a, b) => a.length - b.length) // 원소 개수가 낮은 순으로 정렬
      .reduce((set, tuple) => {
        for (const t of tuple) {
          if (set.has(+t)) continue;
          set.add(+t); // 자리수에 해당하는 값 푸시
          break;
        }
        return set;
      }, new Set()),
  ];
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
