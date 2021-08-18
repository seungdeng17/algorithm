// https://programmers.co.kr/learn/courses/30/lessons/12921

// function solution(n) {
//   let answer = 0;

//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) answer++;
//   }

//   function isPrime(n) {
//     if (n === 1) return false;
//     for (let i = 2; i <= parseInt(Math.sqrt(n)); i++)
//       if (n % i === 0) return false;
//     return true;
//   }

//   return answer;
// }

function solution(n) {
  let answer = 0;

  const dy = Array.from({ length: n + 1 }, () => 1);
  dy[0] = 0;
  dy[1] = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = i * 2; j <= n; j += i) dy[j] = 0;
  }

  for (let i = 2; i <= n; i++) if (dy[i]) answer++;

  return answer;
}

console.log(solution(10));
