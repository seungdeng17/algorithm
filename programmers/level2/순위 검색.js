// https://programmers.co.kr/learn/courses/30/lessons/72412

function solution(info, query) {
  const answer = [];
  const map = new Map();

  for (let i = 0; i < info.length; i++) {
    const data = info[i].split(" ");
    const score = +data.pop();
    addMapData(map, data.join(""), score);
    for (let m = 1; m <= 4; m++) combination(0, 0, m, data, score);
  }

  for (const [key, value] of map) {
    value.sort((a, b) => a - b);
    map.set(key, value);
  }

  for (let i = 0; i < query.length; i++) {
    const data = query[i].replace(/and /g, "").split(" ");
    const score = +data.pop();
    const q = data.join("");
    if (!map.has(q)) {
      answer[i] = 0;
      continue;
    }
    const arr = map.get(q);
    let lt = 0;
    let rt = arr.length - 1;
    while (lt <= rt) {
      const mid = parseInt((lt + rt) / 2);
      if (arr[mid] < score) lt = mid + 1;
      else rt = mid - 1;
    }
    answer[i] = arr.length - lt;
  }

  function combination(L, s, m, data, score) {
    if (L === m) {
      addMapData(map, data.join(""), score);
      return;
    }

    for (let i = s; i < data.length; i++) {
      const tmp = data[i];
      data[i] = "-";
      combination(L + 1, i + 1, m, data, score);
      data[i] = tmp;
    }
  }

  return answer;
}

function addMapData(map, key, value) {
  if (!map.has(key)) map.set(key, [value]);
  else map.get(key).push(value);
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
