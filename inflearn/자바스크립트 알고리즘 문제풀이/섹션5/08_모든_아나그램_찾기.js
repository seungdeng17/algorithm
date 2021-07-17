// function solution(str, word) {
//   let answer = 0;
//   const map = new Map();

//   for (let w of word) {
//     if (!map.has(w)) map.set(w, 1);
//     else map.set(w, map.get(w) + 1);
//   }

//   for (let i = 0; i < str.length - 2; i++) {
//     const _str = str[i] + str[word.length - 2 + i] + str[word.length - 1 + i];
//     const _map = new Map([...map]);
//     let flag = true;
//     for (let s of _str) {
//       if (!_map.has(s) || _map.get(s) === 0) {
//         flag = false;
//         break;
//       }
//       _map.set(s, _map.get(s) - 1);
//     }
//     if (flag) answer++;
//   }

//   return answer;
// }

function solution(str, word) {
  let answer = 0;
  const map1 = new Map();
  const map2 = new Map();

  for (let s of word) {
    if (!map1.has(s)) map1.set(s, 1);
    else map1.set(s, map1.get(s) + 1);
  }

  for (let i = 0; i < word.length - 1; i++) {
    if (!map2.has(str[i])) map2.set(str[i], 1);
    else map2.set(str[i], map2.get(str[i]) + 1);
  }

  let p1 = 0;
  let p2 = word.length - 1;
  while (p2 < str.length) {
    if (!map2.has(str[p2])) map2.set(str[p2], 1);
    else map2.set(str[p2], map2.get(str[p2]) + 1);
    p2++;

    if (compareMaps(map1, map2)) answer++;

    if (!(map2.get(str[p1]) - 1)) map2.delete(str[p1]);
    else map2.set(str[p1], map2.get(str[p1]) - 1);
    p1++;
  }

  return answer;
}

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (!map2.get(key) || map2.get(key) !== value) return false;
  }
  return true;
}

console.log(solution("bacaAacba", "abc"));
