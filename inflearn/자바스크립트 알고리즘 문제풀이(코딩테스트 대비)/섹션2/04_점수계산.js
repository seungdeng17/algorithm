function solution(arr) {
  let addPonit = 1;
  return arr.reduce((acc, r) => {
    if (r) {
      acc += addPonit;
      addPonit++;
    } else {
      addPonit = 1;
    }
    return acc;
  }, 0);
}

console.log(solution([1, 0, 1, 1, 1, 0, 1, 1, 0]));
