function solution(board, moves) {
  let count = 0;
  const stack = [];

  while (moves.length) {
    const i = moves.shift() - 1;
    for (let j = 0; j < board.length; j++) {
      if (!board[j][i]) continue;
      const curr = board[j][i];
      stack.push(curr);
      if (stack[stack.length - 1] === stack[stack.length - 2]) {
        count += 2;
        stack.pop();
        stack.pop();
      }
      board[j][i] = 0;
      break;
    }
  }

  return count;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
