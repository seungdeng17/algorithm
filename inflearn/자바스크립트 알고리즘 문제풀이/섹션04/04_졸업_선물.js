// // // // function solution(money, arr) {
// // // //   let answer = [];

// // // //   arr.sort((a, b) => {
// // // //     const [a1, a2] = a;
// // // //     const [b1, b2] = b;
// // // //     return a1 + a2 - (b1 + b2);
// // // //   });

// // // //   for (let i = 0; i < arr.length; i++) {
// // // //     const temp = [[arr[i][0], arr[i][1]]];
// // // //     let _money = money - (arr[i][0] / 2 + arr[i][1]);
// // // //     for (let j = 0; j < arr.length; j++) {
// // // //       if (i === j) break;
// // // //       if (arr[j][0] + arr[j][1] > _money) break;
// // // //       if (arr[j][0] + arr[j][1] <= _money) {
// // // //         _money -= arr[j][0] + arr[j][1];
// // // //         temp.push(arr[j]);
// // // //       }
// // // //     }
// // // //     if (answer.length <= temp.length) answer = temp;
// // // //   }

// // // //   return answer;
// // // // }

// // // function solution(m, arr) {
// // //   let answer = [];
// // //   arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

// // //   for (let i = 0; i < arr.length; i++) {
// // //     let money = m - (arr[i][0] / 2 + arr[i][1]);
// // //     const temp = [[arr[i][0], arr[i][1]]];
// // //     for (let j = 0; j < arr.length; j++) {
// // //       if (i === j) continue;
// // //       money -= arr[j][0] + arr[j][1];
// // //       if (money >= 0) temp.push(arr[j]);
// // //     }
// // //     if (answer.length < temp.length) answer = temp;
// // //   }

// // //   return answer;
// // // }

// // function solution(limit, arr) {
// //   let answer = Number.MIN_SAFE_INTEGER;

// //   arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
// //   for (let i = 0; i < arr.length; i++) {
// //     let money = 0;
// //     const [m1, m2] = arr[i];
// //     money = m1 / 2 + m2;

// //     const tmp = [];
// //     tmp.push(arr[i]);

// //     for (let j = 0; j < arr.length; j++) {
// //       if (i === j || money >= limit) continue;
// //       const [_m1, _m2] = arr[j];
// //       money += _m1 + _m2;
// //       if (money <= limit) tmp.push(arr[j]);
// //     }

// //     answer = Math.max(answer, tmp.length);
// //   }

// //   return answer;
// // }

// function solution(money, arr) {
//   let answer = [];

//   arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i][0] / 2 + arr[i][1];
//     const tmp = [[arr[i][0], arr[i][1]]];
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) continue;
//       if (sum + arr[j][0] + arr[j][1] > money) break;
//       sum += arr[j][0] + arr[j][1];
//       tmp.push([arr[j][0], arr[j][1]]);
//     }
//     if (tmp.length > answer.length) answer = tmp;
//   }

//   return answer;
// }

function solution(money, arr) {
  let answer = [];

  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length; i++) {
    const tmp = [];
    const [p1, p2] = arr[i];
    let _money = 0;
    _money += p1 / 2 + p2;
    tmp.push(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue;
      const [p1, p2] = arr[j];
      if (_money + p1 + p2 <= money) {
        _money += p1 + p2;
        tmp.push(arr[j]);
      } else break;
    }
    answer = tmp.length > answer.length ? tmp : answer;
  }

  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
