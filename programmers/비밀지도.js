// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const answer = [];

  const _arr1 = arr1.map(makeBinArr.bind(null, n));
  const _arr2 = arr2.map(makeBinArr.bind(null, n));

  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      temp += +_arr1[i][j] > 0 || +_arr2[i][j] > 0 ? "#" : " ";
    }
    answer[i] = temp;
  }

  return answer;
}

function makeBinArr(n, num) {
  const bin = getBin(num);
  if (bin.length < n) return bin.padStart(n, 0);
  return bin;
}

function getBin(num) {
  const binArr = [];
  while(!(num === 0 || num === 1)) {
      const b = num % 2;
      binArr.unshift(b);
      num = Math.floor(num / 2); 
  }
  binArr.unshift(num);
  return binArr.join('');
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
