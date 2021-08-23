// https://programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
  const matrix = Array.from({ length: n }, () => []);
  const dirs = {
    down: {
      dir: [1, 0],
      next: "right",
    },
    right: {
      dir: [0, 1],
      next: "up",
    },
    up: {
      dir: [-1, -1],
      next: "down",
    },
  };

  let number = 1;
  let currDir = "down";
  let x = -1;
  let y = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) {
      const [dx, dy] = dirs[currDir].dir;
      x += dx;
      y += dy;
      matrix[x][y] = number++;
    }
    currDir = dirs[currDir].next;
    n--;
  }

  return matrix.reduce((acc, arr) => {
    acc.push(...arr);
    return acc;
  }, []);
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
