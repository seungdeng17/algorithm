function solution(arr) {
  const answer = [];
  const _arr = arr.map((n) => +n.toString().split("").reverse().join(""));

  for (let i = 0; i < _arr.length; i++) {
    if (isPrime(_arr[i])) {
      answer.push(_arr[i]);
    }
  }

  return answer;
}

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
