// // function solution(need, plan) {
// //   let answer = "YES";
// //   const queue = need.split("");

// //   for (let p of plan) {
// //     if (queue.includes(p) && p !== queue.shift()) return "NO";
// //   }
// //   if (queue.length) return "NO";

// //   return answer;
// // }

// function solution(need, plan) {
//   let answer = "YES";
//   const queue = need.split("");

//   for (let p of plan) {
//     if (queue.includes(p) && p !== queue.shift()) return "NO";
//   }
//   if (queue.length) return "No";

//   return answer;
// }

function solution(need, plan) {
  const queue = plan.split("");
  while (queue.length !== need.length) {
    const p = queue.shift();
    if (need.includes(p)) queue.push(p);
  }

  return queue.join("") === need ? "YES" : "NO";
}

console.log(solution("CBA", "CBDAGE"));
