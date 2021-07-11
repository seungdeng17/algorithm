function solution(s, t) {
  const answer = [];

  let p = 100;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
    }
    answer.push(p);
  }

  p = 100;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
    }

    if (answer[i] > p) {
      answer.splice(i, 1, p);
    }
  }

  return answer;
}

console.log(solution("teachermode", "e"));
