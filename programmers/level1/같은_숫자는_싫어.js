// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const answer = [];

  let tmp = -1;
  for (let i = 0; i < arr.length; i++) {
    if (tmp === arr[i]) continue;
    answer.push(arr[i]);
    tmp = arr[i];
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
