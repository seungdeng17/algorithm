// // function solution(arr) {
// //   const answer = [];
// //   const _arr = arr.map((n) => +n.toString().split("").reverse().join(""));

// //   for (let i = 0; i < _arr.length; i++) {
// //     if (isPrime(_arr[i])) {
// //       answer.push(_arr[i]);
// //     }
// //   }

// //   return answer;
// // }

// // function isPrime(n) {
// //   if (n === 1) return false;
// //   for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
// //     if (n % i === 0) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// function solution(arr) {
//   const answer = [];

//   for (let n of arr) {
//     const _n = +String(n).split("").reverse().join("");
//     if (isPrime(_n)) answer.push(_n);
//   }

//   function isPrime(n) {
//     if (n === 1) return false;
//     for (let i = 2; i < parseInt(Math.sqrt(n)); i++) {
//       if (n !== i && n % i === 0) return false;
//     }
//     return true;
//   }

//   return answer;
// }

function solution(arr) {
  const answer = [];

  const primeArr = getPrimeArr(Math.max(...arr));
  for (let n of arr) {
    const _n = +String(n).split("").reverse().join("");
    if (primeArr[_n]) answer.push(_n);
  }

  function getPrimeArr(n) {
    const dy = Array.from({ length: n + 1 }, () => 1);
    dy[0] = 0;
    dy[1] = 0;
    for (let i = 2; i <= n; i++) {
      if (!dy[i]) continue;
      for (let j = i * 2; j <= n; j += i) dy[j] = 0;
    }
    return dy;
  }

  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
