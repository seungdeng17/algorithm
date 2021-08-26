// https://programmers.co.kr/learn/courses/30/lessons/72412
// 풀이중

// function solution(info, query) {
//   const answer = [];

//   query.forEach((cmd, idx) => {
//     let cnt = 0;
//     const score = +cmd.match(/([\d]+)$/)[0];
//     cmd = cmd.replace(score, "").trim();
//     const tmp = cmd.split(" and ");

//     const ch = Array.from({ length: info.length }, () => 1);
//     for (let s of tmp) {
//       if (s === "-") continue;
//       for (let i = 0; i < info.length; i++) {
//         if (!ch[i]) continue;
//         if (!info[i].includes(s)) {
//           ch[i] = 0;
//           continue;
//         }
//       }
//     }
//     for (let i = 0; i < info.length; i++) {
//       if (!ch[i]) continue;
//       if (+info[i].match(/([\d]+)$/)[0] < score) ch[i] = 0;
//     }
//     for (let c of ch) if (c) cnt++;

//     answer[idx] = cnt;
//   });

//   return answer;
// }

function solution(info, query) {
  const answer = [];

  const map = new Map();
  const subset = getSubset(4);
  for (let data of info) {
    const score = +data.match(/([\d]+)$/)[0];
    data = data.replace(score, "").trim();
    const tmp = data.split(" ");
    for (let set of subset) {
      const _tmp = tmp.slice();
      for (let i = 0; i < set.length; i++) _tmp[set[i]] = "-";
      const str = _tmp.join("");
      if (map.has(str)) map.get(str).push(score);
      else map.set(str, [score]);
    }
  }

  for (let i = 0; i < query.length; i++) {
    const score = +query[i].match(/([\d]+)$/)[0];
    const _query = query[i].replace(score, "").replace(/and|\s/g, "");
    if (!map.has(_query)) {
      answer[i] = 0;
      continue;
    }
    answer[i] = map.get(_query).filter((n) => n >= score).length;
  }

  return answer;
}

function getSubset(n) {
  const subset = [];
  const tmp = [];
  function DFS(L) {
    if (L === n) {
      subset.push([...tmp]);
      return;
    }
    tmp.push(L);
    DFS(L + 1);
    tmp.pop();
    DFS(L + 1);
  }
  DFS(0);
  return subset;
}

console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
