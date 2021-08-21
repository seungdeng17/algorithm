// https://programmers.co.kr/learn/courses/30/lessons/17686

function solution(arr) {
  return arr.sort((a, b) => {
    let [aHead, aNumber] = a
      .split(/([^0-9]+)([0-9]{1,5})(.*)/)
      .filter((s) => s);
    let [bHead, bNumber] = b
      .split(/([^0-9]+)([0-9]{1,5})(.*)/)
      .filter((s) => s);

    aHead = aHead.toLowerCase();
    bHead = bHead.toLowerCase();

    if (aHead !== bHead) {
      const [_aHead, _bHead] = [aHead, bHead].sort();
      return aHead === _aHead ? -1 : 1;
    }
    if (+aNumber === +bNumber) return 0;
    return +aNumber - +bNumber;
  });
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
console.log(
  solution([
    "A-10 Thunderbolt II",
    "B-50 Superfortress",
    "F-5 Freedom Fighter",
    "F-14 Tomcat",
  ])
);
console.log(solution(["ABC12", "AbC12", "aBc12"]));
console.log(solution(["MUZI01.zip", "muzi-1.png", "aBc12"]));
console.log(solution(["a-z2.png", "a01.zip", "aBc12"]));
