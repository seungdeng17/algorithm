// function solution(money, changes) {
//   let answer = 0;
//   changes.sort((a, b) => b - a);

//   for (let change of changes) {
//     const c = Math.floor(money / change);
//     money -= change * c;
//     answer += c;
//   }

//   return answer;
// }

function solution(money, changes) {
  const dy = Array.from({ length: money + 1 }, () => 100000);
  dy[0] = 0;

  for (let i = 0; i < changes.length; i++) {
    const coin = changes[i];
    for (let j = coin; j <= money; j++) {
      const curr = dy[j - coin] + 1;
      if (dy[j] > curr) dy[j] = curr;
    }
  }

  return dy[money];
}

console.log(solution(4200, [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]));
console.log(solution(4790, [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]));
