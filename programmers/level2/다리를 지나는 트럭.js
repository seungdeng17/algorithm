// https://programmers.co.kr/learn/courses/30/lessons/42583
// 풀이중

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  const queue = [];
  let currTruck = 0;
  queue.push(truck_weights[currTruck]);
  answer++;
  while (queue.length) {
    if (!queue[0]) {
      queue.shift();
      answer++;
      continue;
    }
    for (let i = 1; i < bridge_length; i++) {
      const total = queue.reduce((a, b) => a + b, 0);
      if (
        queue.length < bridge_length &&
        currTruck + 1 < truck_weights.length &&
        total + truck_weights[currTruck + 1] <= weight
      ) {
        queue.push(truck_weights[++currTruck]);
        answer++;
      } else {
        queue.push(0);
      }
    }

    while (true) {
      if (!queue[0]) break;
      queue.shift();
      answer++;
    }

    if (currTruck + 1 < truck_weights.length) {
      queue.push(truck_weights[++currTruck]);
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
console.log(solution(100, 100, [50, 60]));
