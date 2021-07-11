function solution(str) {
  return str
    .replace(/[^a-zA-Z\s]/g, "")
    .split("")
    .reverse()
    .join("")
    .toLowerCase() === str.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
    ? "YES"
    : "No";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
