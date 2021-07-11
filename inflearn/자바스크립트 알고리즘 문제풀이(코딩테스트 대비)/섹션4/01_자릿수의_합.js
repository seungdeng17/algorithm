function solution(arr) {
  let answer = 0;

  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    const sum = String(arr[i])
      .split("")
      .reduce((acc, n) => +acc + +n);
    if (temp < sum) {
      temp = sum;
      answer = arr[i];
    } else if (temp === sum) {
      answer = answer < arr[i] ? arr[i] : answer;
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
