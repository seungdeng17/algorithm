// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(str) {
  //   if (!(str.length === 4 || str.length === 6)) return false;
  //   return !str.match(/[^0-9]/g);

  const reg = /^[0-9]{4}$|^[0-9]{6}$/;
  return reg.test(str);
}

console.log(solution("a234"));
console.log(solution("1234"));
