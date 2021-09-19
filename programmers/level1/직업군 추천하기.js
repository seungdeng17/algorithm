// https://programmers.co.kr/learn/courses/30/lessons/84325

function solution(table, languages, preference) {
  const tmp = [];
  let maxScore = 0;

  for (const data of table) {
    const arr = data.split(" ").reverse();
    const part = arr.pop();

    let score = 0;
    for (let i = 0; i < languages.length; i++) {
      const lang = languages[i];
      const idx = arr.indexOf(lang);
      score += idx !== -1 ? (idx + 1) * preference[i] : 0;
    }

    tmp.push([part, score]);
    maxScore = Math.max(maxScore, score);
  }

  return tmp
    .filter(([, s]) => s === maxScore)
    .map(([p]) => p)
    .sort()[0];
}

console.log(
  solution(
    [
      "SI JAVA JAVASCRIPT SQL PYTHON C#",
      "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
      "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
      "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
      "GAME C++ C# JAVASCRIPT C JAVA",
    ],
    ["PYTHON", "C++", "SQL"],
    [7, 5, 5]
  )
);
console.log(
  solution(
    [
      "SI JAVA JAVASCRIPT SQL PYTHON C#",
      "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
      "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
      "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
      "GAME C++ C# JAVASCRIPT C JAVA",
    ],
    ["JAVA", "JAVASCRIPT"],
    [7, 5]
  )
);
