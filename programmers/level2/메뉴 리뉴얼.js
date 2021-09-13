function solution(orders, course) {
  const map = new Map();

  let tmpArr;
  for (const order of orders) {
    const str = order.split("").sort().join("");
    for (const max of course) {
      tmpArr = [];
      getCombination(0, 0, str, max);
    }
  }

  function getCombination(L, s, str, max) {
    if (L === max) {
      const combi = tmpArr.join("");
      if (!map.has(combi)) map.set(combi, 1);
      else map.set(combi, map.get(combi) + 1);
      return;
    }
    for (let i = s; i < str.length; i++) {
      tmpArr[L] = str[i];
      getCombination(L + 1, i + 1, str, max);
    }
  }

  let tmpKeyCnt = 0;
  let tmpCnt = 0;
  return [...map.entries()]
    .sort((a, b) => {
      if (a[0].length === b[0].length) return b[1] - a[1];
      return a[0].length - b[0].length;
    })
    .filter((e) => {
      const [key, cnt] = e;
      if (key.length !== tmpKeyCnt) {
        tmpKeyCnt = key.length;
        tmpCnt = cnt;
      }
      return cnt > 1 && cnt === tmpCnt;
    })
    .map((e) => e[0])
    .sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
