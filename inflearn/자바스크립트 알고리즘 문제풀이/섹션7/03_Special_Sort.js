// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//       }
//     }
//   }

//   return arr;
// }

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
}

console.log(solution([1, 2, 3, -3, -2, 7, 5, 6, -6]));
