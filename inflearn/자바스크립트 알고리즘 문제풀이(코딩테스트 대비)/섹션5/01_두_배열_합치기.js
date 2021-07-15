function solution(arr1, arr2) {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length || p2 < arr2.length) {
    if (!arr2[p2] || arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else if (!arr1[p1] || arr1[p1] > arr2[p2]) {
      answer.push(arr2[p2]);
      p2++;
    }
  }

  return answer;
}

console.log(solution([2, 3, 6, 7, 9], [1, 3, 5]));
