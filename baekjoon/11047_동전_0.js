function solution(money, changes) {
  let answer = 0;
  changes.sort((a, b) => b - a);

  for (let change of changes) {
    const c = Math.floor(money / change);
    money -= change * c;
    answer += c;
  }

  return answer;
}

console.log(solution(4200, [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]));
console.log(solution(4790, [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]));
