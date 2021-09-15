// https://programmers.co.kr/learn/courses/30/lessons/17686

function solution(arr) {
  return arr.sort((a, b) => {
    let [aHead, aNumber] = a
      .split(/([^0-9]+)([0-9]{1,5})(.*)/)
      .filter((s) => s); // Head, Number 분리
    let [bHead, bNumber] = b
      .split(/([^0-9]+)([0-9]{1,5})(.*)/)
      .filter((s) => s);

    aHead = aHead.toLowerCase();
    bHead = bHead.toLowerCase();

    if (aHead !== bHead) {
      const [_aHead, _bHead] = [aHead, bHead].sort(); // Head가 같은 문자열이 아니면 사전순 정렬
      return aHead === _aHead ? -1 : 1; // 사전순으로 정렬했을 때 기존 정렬 상태와 같으면 스왑
    }
    if (+aNumber === +bNumber) return 0; // Number가 같으면 정렬 상태 유지
    return +aNumber - +bNumber; // 다르면 오름차순 정렬
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
