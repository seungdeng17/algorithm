function solution(block, board) {
  let answer = 0;

  const blocks = {
    0: {
      dx: [0, 1, 1],
      dy: [0, 0, 0],
    },
  };

  const dx = blocks[block]["dx"];
  const dy = blocks[block]["dy"];
  let _board;
  let flag;

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y]) continue;
      _board = getBoard(board);
      flag = false;
      DFS(x, y, 0);

      let cnt = 0;
      for (let i = 0; i < board.length; i++) {
        if (_board[i].includes(0)) continue;
        cnt++;
      }
      answer = Math.max(answer, cnt);
    }
  }

  function DFS(x, y, L) {
    if (L === 3) return;
    const nx = x + dx[L];
    const ny = y + dy[L];
    if (
      nx < 0 ||
      ny < 0 ||
      nx >= board.length ||
      ny >= board.length ||
      board[nx][ny]
    )
      return (flag = true);
    _board[nx][ny] = 1;
    DFS(nx, ny, L + 1);
    if (flag) _board[nx][ny] = 0;
  }

  function getBoard(board) {
    return board.reduce((acc, arr) => {
      acc.push([...arr]);
      return acc;
    }, []);
  }

  return answer;
}

console.log(
  solution(0, [
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
  ])
);
