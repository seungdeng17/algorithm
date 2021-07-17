function solution(arr) {
  return arr.reduce((acc, str) => {
    if (acc.length < str.length) acc = str;
    return acc;
  });
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
