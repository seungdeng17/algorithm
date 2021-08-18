// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let sum = 0;
  let tmp = price;
  for (let i = 0; i < count; i++) {
    sum += tmp;
    tmp += price;
  }
  return sum > money ? sum - money : 0;
}

console.log(solution(3, 20, 4));
