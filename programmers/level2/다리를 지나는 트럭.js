// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  const queue = Array.from({ length: bridge_length - 1 }, () => 0);
  let currTruck = 0;
  let sum = truck_weights[currTruck];
  queue.push(truck_weights[currTruck++]);
  answer++;
  while (queue.length) {
    const curr = queue.shift();
    sum -= curr;
    answer++;

    if (
      currTruck < truck_weights.length &&
      sum + truck_weights[currTruck] <= weight
    ) {
      queue.push(truck_weights[currTruck]);
      sum += truck_weights[currTruck];
      currTruck++;
    } else {
      if (currTruck !== truck_weights.length) queue.push(0);
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
console.log(solution(100, 100, [50, 60]));
