function solution(money, arr) {
  let answer = [];

  arr.sort((a, b) => {
    const [a1, a2] = a;
    const [b1, b2] = b;
    return a1 + a2 - (b1 + b2);
  });

  for (let i = 0; i < arr.length; i++) {
    const temp = [[arr[i][0], arr[i][1]]];
    let _money = money - (arr[i][0] / 2 + arr[i][1]);
    for (let j = 0; j < arr.length; j++) {
      if (i === j) break;
      if (arr[j][0] + arr[j][1] > _money) break;
      if (arr[j][0] + arr[j][1] <= _money) {
        _money -= arr[j][0] + arr[j][1];
        temp.push(arr[j]);
      }
    }
    if (answer.length <= temp.length) answer = temp;
  }

  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
