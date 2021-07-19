function solution(arr) {
  let answer = 0;
  const timeline = [];

  for (let t of arr) {
    const [s, e] = t;
    timeline.push([s, "s"]);
    timeline.push([e, "e"]);
  }

  timeline.sort((a, b) => {
    // if (a[0] === b[0]) return a[1] === "s" ? 1 : -1;
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    return a[0] - b[0];
  });

  let count = 0;
  for (let t of timeline) {
    if (t[1] === "s") count++;
    else count--;
    answer = Math.max(answer, count);
  }

  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
