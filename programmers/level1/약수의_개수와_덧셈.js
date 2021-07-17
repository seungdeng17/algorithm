// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    const aliquot = [1];
    if (i !== 1) aliquot.push(i);
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) aliquot.push(j);
    }
    answer += aliquot.length % 2 === 0 ? i : -i;
  }

  return answer;
}
