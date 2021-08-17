function solution(str) {
  return str.split("").reverse().join("").toLowerCase() === str.toLowerCase()
    ? "YES"
    : "No";
}

console.log(solution("gooG"));
