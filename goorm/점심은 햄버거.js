function solution(input) {
  const result = [];
  let [cnt, eT, bT] = input;
  eT = eT.split(" ").sort((a, b) => b - a);
  bT = bT.split(" ").sort((a, b) => a - b);

  let tmp = 0;
  for (let i = 0; i < cnt; i++) {
    tmp += +bT[i];
    result.push(tmp + +eT[i]);
  }

  return Math.max(...result);
}

// readline
const input = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
