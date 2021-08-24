// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  let lt = 0;
  let rt = Math.max(...arr);
  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    if (checker(mid)) {
      lt = mid + 1;
      answer = mid;
    } else {
      rt = mid - 1;
    }
  }

  function checker(mid) {
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= mid) left.push(arr[i]);
      else right.push(arr[i]);
    }
    return left.length >= mid && right.length <= mid;
  }

  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([2, 2]));
