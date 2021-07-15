// https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        answer += isPrime(nums[i] + nums[j] + nums[k]) ? 1 : 0;
      }
    }
  }

  return answer;
}

function isPrime(n) {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
