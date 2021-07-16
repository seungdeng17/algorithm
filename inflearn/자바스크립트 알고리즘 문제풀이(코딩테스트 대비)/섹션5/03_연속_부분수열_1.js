function solution(arr, target) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  let sum = 0;

  while (p2 < arr.length) {
    if (sum === target) {
      answer.push(arr.slice(p1, p2));
      sum -= arr[p1];
      p1++;
    }
    if (sum > target) {
      sum -= arr[p1];
      p1++;
    }
    if (sum < target) {
      sum += arr[p2];
      p2++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
