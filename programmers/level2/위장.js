// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const map = new Map();
  for (let [_, type] of clothes) {
    if (map.has(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  }
  return [...map.values()].reduce((acc, n) => acc * (n + 1), 1) - 1;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
