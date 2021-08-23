// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  const answer = [0, 0];

  function getBinary(n) {
    if (n <= 1) return String(n);
    return getBinary(parseInt(n / 2)) + String(n % 2);
  }

  function DFS(s) {
    if (s === "1") return;
    answer[0]++;
    s = s.replace(/0/g, () => {
      answer[1]++;
      return "";
    });
    DFS(getBinary(s.length));
  }
  DFS(s);

  return answer;
}

console.log(solution("110010101001"));
