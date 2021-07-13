// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  const posMap = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let left = "*";
  let right = "#";

  function checkDist(num) {
    const leftDist =
      Math.abs(posMap[left][0] - posMap[num][0]) +
      Math.abs(posMap[left][1] - posMap[num][1]);
    const rightDist =
      Math.abs(posMap[right][0] - posMap[num][0]) +
      Math.abs(posMap[right][1] - posMap[num][1]);
    if (leftDist === rightDist) return hand === "left" ? "L" : "R";
    return leftDist < rightDist ? "L" : "R";
  }

  return numbers.reduce((answer, num) => {
    if (num % 3 === 1) {
      left = num;
      return (answer += "L");
    }
    if (num !== 0 && num % 3 === 0) {
      right = num;
      return (answer += "R");
    }
    const _hand = checkDist(num);
    if (_hand === "L") left = num;
    if (_hand === "R") right = num;
    return (answer += _hand);
  }, "");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
