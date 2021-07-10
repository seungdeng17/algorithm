function solution(str, w) {
  return str.split("").reduce((acc, s) => {
    if (s === w) acc += 1;
    return acc;
  }, 0);
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
