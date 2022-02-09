function solution(s, k) {
  let result = "";
  const stack = [];

  for (const apb of s) {
    if (!stack.length || (stack.length && stack[stack.length - 1][0] !== apb)) {
      stack.push([apb, 1]);
    } else if (
      stack[stack.length - 1][0] === apb &&
      stack[stack.length - 1][1] + 1 === k
    ) {
      stack.pop();
    } else {
      stack[stack.length - 1][1]++;
    }
  }

  for (const [apb, cnt] of stack) {
    result += apb.repeat(cnt);
  }

  return result;
}

console.log(solution("deeedbbcccbdaa", 3));
