// https://programmers.co.kr/learn/courses/18/lessons/1877

function solution(arr) {
  const ch = Array.from({ length: arr.length + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    if (ch[arr[i]] || !arr[i] || arr[i] > arr.length) return false;
    ch[arr[i]] = 1;
  }
  return true;
}
