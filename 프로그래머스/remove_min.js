function solution(arr) {
  var answer = [];
  let min = arr[0];

  if (arr.length < 2) return [-1];
  arr.forEach((number, idx) => {
    if (min > number) min = number;
  });
  let idx = arr.indexOf(min);
  arr.splice(idx, 1);

  return arr;
}
