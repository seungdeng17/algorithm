function solution(str) {
  const isEven = str.length % 2 === 0;
  return isEven
    ? str.substr(str.length / 2 - 1, 2)
    : str[Math.floor(str.length / 2)];
}

console.log(solution("study"));
console.log(solution("good"));
