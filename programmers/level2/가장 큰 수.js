// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(arr) {
  arr.sort((a, b) => {
    const sum1 = +(String(a) + String(b));
    const sum2 = +(String(b) + String(a));
    return sum1 > sum2 ? -1 : 1;
  });
  if (!+arr.join("")) return "0";
  return arr.join("");
}

console.log(solution([30, 33, 3]));
console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([12, 1213]));
console.log(solution([0, 0, 0, 0]));
console.log(solution([90, 908, 89, 898, 10, 101, 1, 8, 9]));
