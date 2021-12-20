/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let result = [];
  let minDiff = Number.MAX_SAFE_INTEGER;

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i];
    const b = arr[i + 1];
    const diff = Math.abs(a - b);
    if (diff > minDiff) continue;
    if (diff < minDiff && result.length) result = [];
    minDiff = diff;
    result.push([a, b]);
  }

  return result;
};
