function solution(n, arr) {
  return arr.reduce((acc, number) => {
    if (String(n) === String(number)[String(number).length - 1]) acc += 1;
    return acc;
  }, 0);
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
