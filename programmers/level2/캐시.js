// https://programmers.co.kr/learn/courses/30/lessons/17680

function solution(size, arr) {
  let answer = 0;

  if (size === 0) return arr.length * 5;
  const cache = Array.from({ length: size }, () => "");
  while (arr.length) {
    const city = arr.shift().toLowerCase();
    let pos = -1;
    for (let i = 0; i < cache.length; i++) if (cache[i] === city) pos = i;

    if (pos === -1) {
      answer += 5;
      for (let i = size - 1; i > 0; i--) cache[i] = cache[i - 1];
    } else {
      answer += 1;
      for (let i = pos; i > 0; i--) cache[i] = cache[i - 1];
    }
    cache[0] = city;
  }

  return answer;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
console.log(solution(30, ["c", "b", "a", "b", "a"]));
