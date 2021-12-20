/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (const bracket of s) {
    if (bracket === "(" || bracket === "{" || bracket === "[")
      stack.push(bracket);
    else if (bracket === ")" && stack[stack.length - 1] === "(") stack.pop();
    else if (bracket === "}" && stack[stack.length - 1] === "{") stack.pop();
    else if (bracket === "]" && stack[stack.length - 1] === "[") stack.pop();
    else return false;
  }
  return !stack.length;
};
