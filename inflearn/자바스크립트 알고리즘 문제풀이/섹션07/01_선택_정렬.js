// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) minIndex = j;
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }

//   return arr;
// }

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
