// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  return pipe(validateWord, validateLegnth)(new_id);
}

const pipe =
  (...fns) =>
  (args) =>
    fns.reduce((arg, nextFn) => nextFn(arg), args);

function validateWord(new_id) {
  return new_id
    .replace(/[A-Z]/g, (s) => s.toLowerCase())
    .replace(/[^0-9a-z-_\.]/g, "")
    .replace(/\.(\.)+/g, ".")
    .replace(/^\.|\.$/g, "");
}

function validateLegnth(new_id) {
  if (!new_id) new_id = "a";
  if (new_id.length <= 2) new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
  if (new_id.length >= 16) new_id = new_id.substr(0, 15).replace(/\.$/, "");
  return new_id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
