// https://www.acmicpc.net/problem/1991

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   if (line === "exit") {
//     rl.close();
//   }
//   main(line);
// });
// rl.on("close", () => {
//   process.exit();
// });

// const tree = {};
// let treeCnt;

// function main(line) {
//   if (!Number.isNaN(+line)) return (treeCnt = +line);
//   if (treeCnt > 0) {
//     const [pn, cn1, cn2] = line.split(" ");
//     tree[pn] = [cn1, cn2];
//     treeCnt--;
//   }
//   if (treeCnt > 0) return;
//   console.log(treeCnt);
//   console.log(tree);

//   let tmp = "";
//   function DFS(V, i) {
//     if (V === ".") return;
//     if (i === 0) tmp += V;
//     DFS(tree[V][0], i);
//     if (i === 1) tmp += V;
//     DFS(tree[V][1], i);
//     if (i === 2) tmp += V;
//   }

//   for (let i = 0; i < 3; i++) {
//     tmp = "";
//     DFS("A", i);
//     console.log(tmp);
//   }

//   rl.close();
// }

function solution(tree) {
  function DFS(V) {
    if (V === ".") return;
    // console.log(V);  // 전위
    DFS(tree[V][0]);
    // console.log(V);  // 중위
    DFS(tree[V][1]);
    // console.log(V);  // 후위
  }
  DFS("A");
}

console.log(
  solution({
    A: ["B", "C"],
    B: ["D", "."],
    C: ["E", "F"],
    E: [".", "."],
    F: [".", "G"],
    D: [".", "."],
    G: [".", "."],
  })
);
