// https://programmers.co.kr/learn/courses/30/lessons/42890
// 풀이중

function solution(relation) {
  const answer = [];
  const len = relation.length;

  const totalSubset = getSubset(relation[0].length);
  for (const subset of totalSubset) {
    if (answer.some((k) => subset.join("").includes(k))) continue;

    const set = new Set();
    for (const data of relation) {
      let tmp = "";
      for (const idx of subset) tmp += data[idx];
      set.add(tmp);
    }
    if (set.size === len) answer.push(subset.join(""));
  }

  return answer.length;
}

function getSubset(n) {
  const set = [];
  const tmp = [];
  function DFS(L) {
    if (L === n) {
      if (!tmp.length) return;
      return set.push([...tmp]);
    }
    tmp.push(L);
    DFS(L + 1);
    tmp.pop();
    DFS(L + 1);
  }
  DFS(0);
  return set.sort((a, b) => a.length - b.length);
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
