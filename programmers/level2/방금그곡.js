// https://programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
  let answer = "(None)";

  m = m.replace(/.(?=[#])/g, (s) => s.toLowerCase()).replace(/#/g, "");

  let tmpTime = 0;
  let tmpCnt = 0;
  for (let data of musicinfos) {
    let [start, end, title, music] = data.split(",");
    const [sH, sM] = start.split(":");
    const [eH, eM] = end.split(":");
    const time = +eH * 60 + +eM - (+sH * 60 + +sM);

    music = music
      .replace(/.(?=[#])/g, (s) => s.toLowerCase())
      .replace(/#/g, "");

    const totalMusic = music.padEnd(time, music).substr(0, time);
    const reg = new RegExp(m, "g");

    const result = totalMusic.match(reg);
    if (!result) continue;
    if (result.length >= tmpCnt && time > tmpTime) {
      tmpTime = time;
      tmpCnt = result.length;
      answer = title;
    }
  }

  return answer;
}

console.log(
  solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
console.log(
  solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
console.log(solution("ABC", ["00:00,00:05,HI,ABC#ABC"]));
console.log(solution("ABC", ["00:00,00:06,HI,ABC#ABC"]));
