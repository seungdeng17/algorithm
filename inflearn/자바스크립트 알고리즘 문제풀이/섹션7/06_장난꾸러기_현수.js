function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    if (idx !== i) {
      answer.push(i + 1);
      answer.push(idx + 1);
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
