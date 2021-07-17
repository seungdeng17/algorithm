// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  let answer = [];
  const patternsMap = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };
  const countMap = {};

  for (let student in patternsMap) {
    const studentAnswers = patternsMap[student];
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === studentAnswers[i % studentAnswers.length]) count++;
    }
    countMap[student] = count;
  }

  let highScore = 0;
  for (let student in countMap) {
    if (countMap[student] === highScore) answer.push(+student);
    if (countMap[student] > highScore) {
      highScore = countMap[student];
      answer = [+student];
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
