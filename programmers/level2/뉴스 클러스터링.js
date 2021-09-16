// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const map1 = getCntMap(decomposer(str1.toLowerCase()));
  const map2 = getCntMap(decomposer(str2.toLowerCase()));
  const [intersectionCnt, unionCnt] = getCnt(map1, map2);

  if (!unionCnt) return 65536;
  return Math.floor((intersectionCnt / unionCnt) * 65536);
}

function decomposer(str) {
  const arr = []; // 문자열 분해
  for (let i = 0; i < str.length - 1; i++) {
    const s = str.substr(i, 2);
    if (s.match(/[^a-zA-Z]/)) continue;
    arr.push(s);
  }
  return arr;
}

function getCntMap(arr) {
  const map = new Map();
  for (const s of arr) {
    if (!map.has(s)) map.set(s, 1);
    else map.set(s, map.get(s) + 1);
  }
  return map;
}

function getCnt(map1, map2) {
  let intersectionCnt = 0; // 자카드 교집합 카운트
  let unionCnt = 0; // 자카드 합집합 카운트

  map1.forEach((value, key) => {
    if (!map2.has(key)) return (unionCnt += value);
    intersectionCnt += Math.min(value, map2.get(key));
  });
  map2.forEach((value, key) => {
    unionCnt += map1.has(key) ? Math.max(value, map1.get(key)) : value;
  });

  return [intersectionCnt, unionCnt];
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
