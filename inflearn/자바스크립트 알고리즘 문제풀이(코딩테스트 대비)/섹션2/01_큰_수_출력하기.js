function solution(arr) {
  return arr.reduce((acc, n, i, arr) => {
    if (i === 0 || (i > 0 && arr[i - 1] < arr[i])) {
      acc.push(n);
    }
    return acc;
  }, []);
}

console.log(solution([7, 3, 9, 5, 6, 12]));
