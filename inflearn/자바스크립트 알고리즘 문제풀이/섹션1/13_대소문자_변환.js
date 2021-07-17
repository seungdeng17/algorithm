function solution(str) {
  let answer = "";
  for (let w of str) {
    if (w === w.toUpperCase()) {
      answer += w.toLowerCase();
    } else {
      answer += w.toUpperCase();
    }
  }
  return answer;
}

console.log(solution("sTUdy"));
