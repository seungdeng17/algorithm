// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const maximum = parseInt(nums.length / 2);
  const typeCount = new Set(nums).size;
  return maximum < typeCount ? maximum : typeCount;
}
