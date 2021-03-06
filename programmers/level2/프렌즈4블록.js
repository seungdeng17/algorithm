// https://programmers.co.kr/learn/courses/30/lessons/17679

// function solution(m, n, board) {
//   let answer = 0;
//   board = board.map((s) => s.split(""));

//   const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//   const dy = [0, 1, 1, 1, 0, -1, -1, -1];
//   const rdx = [0, 0, 1, 1];
//   const rdy = [0, 1, 1, 0];
//   const queue = [];
//   const set = new Set();

//   for (let i = 0; i < m - 1; i++) {
//     for (let j = 0; j < n - 1; j++) {
//       const block1 = board[i][j];
//       const block2 = board[i][j + 1];
//       if (!block1 || !block2 || block1 !== block2) continue;

//       const tmp = [];
//       queue.push([i, j]);
//       set.add(`${i},${j}`);
//       while (queue.length) {
//         const [x, y] = queue.shift();
//         if (x >= m - 1 || y >= n - 1 || !isBox(block1, [x, y])) continue;
//         tmp.push([x, y]);
//         for (let k = 0; k < dx.length; k++) {
//           const nx = x + dx[k];
//           const ny = y + dy[k];
//           if (nx < 0 || ny < 0 || board[nx][ny] !== block1) continue;
//           if (!set.has(`${nx},${ny}`)) {
//             queue.push([nx, ny]);
//             set.add(`${nx},${ny}`);
//           }
//         }
//       }
//       for (let [x, y] of tmp) {
//         for (let k = 0; k < rdx.length; k++) {
//           const nx = x + rdx[k];
//           const ny = y + rdy[k];
//           if (!board[nx][ny]) continue;
//           board[nx][ny] = 0;
//           answer++;
//         }
//       }
//       if (tmp.length) {
//         i = 0;
//         j = 0;
//         setBoard();
//       }
//       set.clear();
//     }
//   }

//   function isBox(block, pos) {
//     const [x, y] = pos;
//     for (let k = 0; k < rdx.length; k++) {
//       const nx = x + rdx[k];
//       const ny = y + rdy[k];
//       if (!board[nx][ny] || block !== board[nx][ny]) return false;
//     }
//     return true;
//   }

//   function setBoard() {
//     for (let i = 0; i < n; i++) {
//       for (let j = m - 1; j > 0; j--) {
//         if (board[j][i]) continue;
//         for (let k = j - 1; k >= 0; k--) {
//           if (board[k][i]) {
//             [board[j][i], board[k][i]] = [board[k][i], board[j][i]];
//             break;
//           }
//         }
//       }
//     }
//   }

//   return answer;
// }

function solution(m, n, board) {
  let answer = 0;
  board = board.map((s) => s.split(""));

  const dx = [0, 0, 1, 1];
  const dy = [0, 1, 1, 0];

  while (true) {
    const tmp = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (!board[i][j] || !isBox([i, j])) continue;
        tmp.push([i, j]);
      }
    }

    for (let [x, y] of tmp) {
      for (let k = 0; k < dx.length; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (!board[nx][ny]) continue;
        board[nx][ny] = 0;
        answer++;
      }
    }

    if (!tmp.length) break;
    setBoard();
  }

  function isBox(pos) {
    const [x, y] = pos;
    const block = board[x][y];
    for (let k = 0; k < dx.length; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (!board[nx][ny] || block !== board[nx][ny]) return false;
    }
    return true;
  }

  function setBoard() {
    for (let i = 0; i < n; i++) {
      for (let j = m - 1; j > 0; j--) {
        if (board[j][i]) continue;
        for (let k = j - 1; k >= 0; k--) {
          if (board[k][i]) {
            [board[j][i], board[k][i]] = [board[k][i], board[j][i]];
            break;
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
console.log(solution(7, 2, ["AA", "BB", "AA", "BB", "ZZ", "ZZ", "CC"]));
console.log(solution(2, 2, ["AA", "AA"]));
console.log(solution(2, 2, ["AA", "AB"]));
console.log(solution(3, 2, ["AA", "AA", "AB"]));
console.log(solution(4, 2, ["CC", "AA", "AA", "CC"]));
console.log(solution(6, 2, ["DD", "CC", "AA", "AA", "CC", "DD"]));
console.log(solution(8, 2, ["FF", "AA", "CC", "AA", "AA", "CC", "DD", "FF"]));
console.log(solution(6, 2, ["AA", "AA", "CC", "AA", "AA", "DD"]));
console.log(solution(5, 6, ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]));
console.log(
  solution(6, 6, ["AAAABB", "AAABBB", "AAABBA", "ABBAAA", "BBBAAA", "BBAAAA"])
);
console.log(solution(3, 3, ["BAA", "AAA", "AAB"]));
console.log(solution(4, 5, ["AAAAA", "AUUUA", "AUUAA", "AAAAA"]));
console.log(solution(8, 2, ["CC", "BB", "AA", "BB", "BB", "AA", "BB", "CC"]));
console.log(solution(7, 2, ["AA", "BB", "AA", "BB", "ZZ", "ZZ", "CC"]));
console.log(solution(7, 2, ["AA", "BB", "ZZ", "ZZ", "ZZ", "ZZ", "CC"]));
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
console.log(
  solution(6, 6, ["OXXOXX", "OXXXXX", "OOXXXX", "OXXOXX", "OXXXXX", "OOXXXX"])
);
console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(solution(5, 5, ["BCBAA", "BCAAA", "BAAAB", "AAABB", "AACCC"]));
console.log(solution(5, 5, ["ACAAA", "AACAA", "AAAAA", "AAAAA", "ACCAA"]));
