// https://programmers.co.kr/learn/courses/30/lessons/86051

// function solution(numbers) {
//   let answer = 0;

//   numbers.sort((a, b) => a - b);
//   for (let i = 0; i <= 9; i++) {
//     if (numbers[i] !== i) {
//       answer += i;
//       numbers.unshift(i);
//     }
//   }

//   return answer;
// }

function solution(numbers) {
  const total = Array.from({ length: 9 }, (_, i) => i + 1).reduce(
    (a, b) => a + b,
    0
  );
  return total - numbers.reduce((a, b) => a + b, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
