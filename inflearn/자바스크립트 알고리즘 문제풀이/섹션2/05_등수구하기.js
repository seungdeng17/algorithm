// function solution(arr) {
//   return arr
//     .slice()
//     .sort((a, b) => b - a)
//     .map((n) => arr.indexOf(n) + 1);
// }

function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    let r = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] < arr[j]) r++;
    }
    answer.push(r);
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));
