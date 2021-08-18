// https://programmers.co.kr/learn/courses/30/lessons/12977

// function solution(nums) {
//   let answer = 0;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         answer += isPrime(nums[i] + nums[j] + nums[k]) ? 1 : 0;
//       }
//     }
//   }

//   return answer;
// }

// function isPrime(n) {
//   if (n === 0 || n === 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

function solution(arr) {
  let answer = 0;

  const total = arr.reduce((a, b) => a + b, 0);
  const dy = Array.from({ length: total + 1 }, () => 1);
  dy[0] = 0;
  dy[1] = 0;
  for (let i = 2; i <= total; i++) {
    for (let j = i * 2; j <= total; j += i) {
      dy[j] = 0;
    }
  }

  const ch = Array.from({ length: arr.length }, () => 0);
  function DFS(L, s, sum) {
    if (L === 3) {
      if (dy[sum]) answer++;
      return;
    }
    for (let i = s; i < arr.length; i++) {
      if (ch[i]) continue;
      ch[i] = 1;
      DFS(L + 1, i + 1, sum + arr[i]);
      ch[i] = 0;
    }
  }
  DFS(0, 0, 0);

  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
