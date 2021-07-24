function count(arr, mid) {
  let count = 1;
  let ep = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= mid) {
      count++;
      ep = arr[i];
    }
  }
  return count;
}

function solution(arr, n) {
  let answer = 0;

  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr[arr.length - 1];
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(arr, mid) >= n) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

console.log(solution([1, 2, 8, 4, 9], 3));
