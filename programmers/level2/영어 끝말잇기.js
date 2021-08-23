// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const answer = [0, 0];

  const set = new Set();
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  let last = "";
  for (let i = 0; i < words.length; i++) {
    const q = queue.shift();
    if (set.has(words[i]) || (i !== 0 && words[i][0] !== last)) {
      answer[0] = q;
      answer[1] = parseInt(i / n) + 1;
      break;
    }
    queue.push(q);
    set.add(words[i]);
    last = words[i][words[i].length - 1];
  }

  return answer;
}

// console.log(
//   solution(3, [
//     "tank",
//     "kick",
//     "know",
//     "wheel",
//     "land",
//     "dream",
//     "mother",
//     "robot",
//     "tank",
//   ])
// );
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
