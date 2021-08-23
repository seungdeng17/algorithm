// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(arr, limit) {
  let answer = 0;

  arr.sort((a, b) => b - a);
  let lt = 0;
  let rt = arr.length - 1;
  let sum = 0;
  while (lt <= rt) {
    sum += arr[lt++];
    while (sum + arr[rt] <= limit) sum += arr[rt--];
    sum = 0;
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
console.log(solution([40, 50, 150, 160], 200));
