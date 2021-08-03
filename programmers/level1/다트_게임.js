// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  const scores = dartResult.match(/10|[0-9]/g);
  const options = dartResult.match(/[^0-9][*|#]|[^0-9]/g);
  const tmp = [];

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    const [option, award] = options[i];
    calcScore(i, +score, option, award);
  }

  function calcScore(i, s, o, a) {
    switch (o) {
      case "S":
        tmp[i] = s;
        break;
      case "D":
        tmp[i] = s ** 2;
        break;
      case "T":
        tmp[i] = s ** 3;
        break;
    }

    switch (a) {
      case "*":
        {
          tmp[i] = tmp[i] * 2;
          if (i - 1 >= 0) tmp[i - 1] = tmp[i - 1] * 2;
        }
        break;
      case "#":
        tmp[i] = tmp[i] * -1;
        break;
    }
  }

  return tmp.reduce((a, b) => a + b);
}
