// https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
    new Date(`2016-${a}-${b}`).getDay()
  ];
}
