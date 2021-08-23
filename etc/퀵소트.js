// function solution(arr) {
//   function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     const mid = parseInt(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);
//     return merge(mergeSort(left), mergeSort(right));
//   }

//   function merge(left, right) {
//     const tmp = [];
//     while (left.length && right.length) {
//       if (left[0] > right[0]) tmp.push(right.shift());
//       else tmp.push(left.shift());
//     }
//     while (left.length) tmp.push(left.shift());
//     while (right.length) tmp.push(right.shift());
//     return tmp;
//   }

//   return mergeSort(arr);
// }

function solution(arr) {
  function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) left.push(arr[i]);
      else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  return quickSort(arr);
}

console.log(solution([7, 2, 10, 5, 23, 11, 51, 48]));
