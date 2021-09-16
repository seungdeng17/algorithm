// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const arr1 = decomposer(str1); // 문자열 분해
  const arr2 = decomposer(str2);
  const intersectionCnt = getIntersectionCnt(arr1, arr2); // 자카드 교집합 카운트
  const unionCnt = getUnionCnt(arr1, arr2); // 자카드 합집합 카운트

  if (!unionCnt) return 65536;
  return Math.floor((intersectionCnt / unionCnt) * 65536);
}

function decomposer(str) {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    const s = str.substr(i, 2);
    if (s.match(/[^a-zA-Z]/)) continue;
    arr.push(s.toLowerCase());
  }
  return arr;
}

function getIntersectionCnt(arr1, arr2) {
  let cnt = 0;
  const map1 = getCntMap(arr1);
  const map2 = getCntMap(arr2);
  map1.forEach((value, key) => {
    if (!map2.has(key)) return;
    cnt += Math.min(value, map2.get(key));
  });
  return cnt;
}

function getUnionCnt(arr1, arr2) {
  const map = new Map();
  const map1 = getCntMap(arr1);
  const map2 = getCntMap(arr2);
  for (const m of [map1, map2]) {
    m.forEach((value, key) => {
      if (!map.has(key)) map.set(key, value);
      else if (value > map.get(key)) map.set(key, value);
    });
  }
  return [...map.values()].reduce((a, b) => a + b, 0);
}

function getCntMap(arr) {
  const map = new Map();
  for (const s of arr) {
    if (!map.has(s)) map.set(s, 1);
    else map.set(s, map.get(s) + 1);
  }
  return map;
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
