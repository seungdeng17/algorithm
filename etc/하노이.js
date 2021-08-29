function solution(n) {
  function hanoi(n, from, to, tmp) {
    if (n === 1) {
      console.log(`${n}: ${from} -> ${to}`);
      return;
    }
    hanoi(n - 1, from, tmp, to);
    console.log(`${n}: ${from} -> ${to}`);
    hanoi(n - 1, tmp, to, from);
  }

  return hanoi(n, "A", "B", "C");
}

console.log(solution(3));
