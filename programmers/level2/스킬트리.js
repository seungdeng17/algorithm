// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let answer = 0;

  for (let tree of skill_trees) {
    const queue = tree.split("");
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const s = queue.shift();
      if (skill.includes(s)) queue.push(s);
    }
    let flag = true;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] !== skill[i]) flag = false;
    }
    if (flag) answer++;
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
console.log(solution("CBD", ["AECB"]));
