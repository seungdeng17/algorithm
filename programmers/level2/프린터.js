// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(arr, location) {
  let answer = 0;

  const queue = arr.map((n, i) => [n, i === location]);
  while (queue.length) {
    const [n, isTarget] = queue.shift();
    const trigger = queue.some(([_n]) => _n > n);
    if (trigger) {
      queue.push([n, isTarget]);
    } else {
      answer++;
      if (isTarget) return answer;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
