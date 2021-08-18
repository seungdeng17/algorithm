// https://programmers.co.kr/learn/courses/30/lessons/83201

function solution(scores) {
  const answer = [];

  for (let i = 0; i < scores.length; i++) {
    const tmp = [];
    const myScore = scores[i][i];
    for (let j = 0; j < scores.length; j++) {
      if (i === j) continue;
      tmp.push(scores[j][i]);
    }
    const max = Math.max(...tmp);
    const min = Math.min(...tmp);
    if (myScore <= max && myScore >= min) tmp.push(myScore);

    const average = tmp.reduce((a, b) => a + b) / tmp.length;
    answer.push(getGrade(average));
  }

  function getGrade(average) {
    if (average >= 90) return "A";
    else if (average < 90 && average >= 80) return "B";
    else if (average < 80 && average >= 70) return "C";
    else if (average < 70 && average >= 50) return "D";
    else return "F";
  }

  return answer.join("");
}

console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
);
