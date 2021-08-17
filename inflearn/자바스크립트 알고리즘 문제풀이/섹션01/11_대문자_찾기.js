function solution(str) {
  let answer = 0;
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== lowerStr[i]) answer++;
  }
  return answer;
}

console.log(solution("KoreaTimeGood"));
