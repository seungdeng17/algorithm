//https://programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const w = ["A", "E", "I", "O", "U"];
  const permutations = [];
  const tmp = [];
  function getPermutation(L, m) {
    if (L === m) {
      const str = tmp.join("");
      permutations.push(str);
      return;
    }
    for (let i = 0; i < w.length; i++) {
      tmp.push(w[i]);
      getPermutation(L + 1, m);
      tmp.pop();
    }
  }
  for (let m = 1; m <= w.length; m++) getPermutation(0, m);

  return permutations.sort().indexOf(word) + 1;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
