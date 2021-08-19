// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);
    for (let j = 0; j < arr2[0].length; j++)
      answer[i][j] = arr1[i][j] + arr2[i][j];
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    [
      [3, 4],
      [5, 6],
      [7, 8],
    ]
  )
);
