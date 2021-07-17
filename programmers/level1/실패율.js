// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const answer = [];
  const stagesMap = {};

  for (let i = 1; i <= N; i++) {
    stagesMap[i] = 0;
  }

  for (let i = 0; i < stages.length; i++) {
    if (stages[i] > N) continue;
    if (!stagesMap[stages[i]]) {
      stagesMap[stages[i]] = 1;
    } else {
      stagesMap[stages[i]] = stagesMap[stages[i]] + 1;
    }
  }

  let challenger = stages.length;
  for (let stage in stagesMap) {
    const p = stagesMap[stage];
    answer.push([stage, p / challenger]);
    challenger -= p;
  }

  return answer.sort((a, b) => b[1] - a[1]).map((d) => +d[0]);
}
