function solution(aArr, bArr) {
  return aArr.reduce((acc, a, i) => {
    if (a === bArr[i]) {
      acc.push("D");
    } else if (
      (a === 1 && bArr[i] === 3) ||
      (a === 2 && bArr[i] === 1) ||
      (a === 3 && bArr[i] === 2)
    ) {
      acc.push("A");
    } else {
      acc.push("B");
    }
    return acc;
  }, []);
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
