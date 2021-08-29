// 선택정렬 - n^2 n^2 n^2
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return arr;
}
console.log(selectionSort([15, 7, 2, 10, 5, 23, 11, 51, 48]));

// 버블정렬 - n^2 n^2 n^2
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}
console.log(bubbleSort([15, 7, 2, 10, 5, 23, 11, 51, 48]));

// 삽입정렬 - n n^2 n^2
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return arr;
}
console.log(insertionSort([15, 7, 2, 10, 5, 23, 11, 51, 48]));

// 셸정렬 - n n^1.5 n^2
function shellSort(arr) {
  for (let n = parseInt(arr.length / 2); n >= 1; n = parseInt(n / 2)) {
    for (let i = 0; i < arr.length; i += n) {
      const tmp = arr[i];
      let j;
      for (j = i - n; j >= 0; j -= n) {
        if (arr[j] > tmp) arr[j + n] = arr[j];
        else break;
      }
      arr[j + n] = tmp;
    }
  }

  return arr;
}
console.log(shellSort([15, 7, 2, 10, 5, 23, 11, 51, 48]));

// 퀵정렬 - nlogn nlogn n^2
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([15, 7, 2, 10, 5, 23, 11, 51, 48]));

// 병합정렬 - nlogn nlogn nlong
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = parseInt(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const tmp = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) tmp.push(right.shift());
    else tmp.push(left.shift());
  }
  while (left.length) tmp.push(left.shift());
  while (right.length) tmp.push(right.shift());
  return tmp;
}
console.log(mergeSort([15, 7, 2, 10, 5, 23, 11, 51, 48]));

// 힙정렬 - nlogn nlogn n^2
function heapSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr = heapify(arr, i);
    if (arr[0] > arr[i]) [arr[0], arr[i]] = [arr[i], arr[0]];
  }
  return arr;
}
function heapify(arr, lastIdx) {
  let idx = parseInt(lastIdx / 2) - 1;
  while (idx >= 0) {
    const left = arr[idx * 2 + 1];
    const right = arr[idx * 2 + 2];
    if (left >= right && left > arr[idx]) {
      [arr[idx], arr[idx * 2 + 1]] = [left, arr[idx]];
    } else if (right > left && right > arr[idx]) {
      [arr[idx], arr[idx * 2 + 2]] = [right, arr[idx]];
    }
    idx--;
  }
  return arr;
}
console.log(heapSort([15, 7, 2, 10, 5, 23, 11, 51, 48]));
