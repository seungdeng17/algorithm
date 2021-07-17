function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for (let pos of moves) {
    for (let i = 0; i < board.length; i++) {
      const target = board[i][pos - 1];
      if (target === 0) continue;
      if (stack.length && target === stack[stack.length - 1]) {
        stack.pop();
        answer += 2;
      } else stack.push(target);
      board[i][pos - 1] = 0;
      break;
    }
  }

  return answer;
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
