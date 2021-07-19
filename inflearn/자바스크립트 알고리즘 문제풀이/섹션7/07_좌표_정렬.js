function solution(arr) {
  return arr.sort((a, b) => {
    const [aX, aY] = a;
    const [bX, bY] = b;
    if (aX === bX) return aY - bY;
    return aX - bX;
  });
}

console.log(
  solution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
