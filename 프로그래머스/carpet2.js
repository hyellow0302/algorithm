function solution(brown, yellow) {
  let yellowSize = [];

  if (yellow == 1) return [3, 3];

  for (let i = 1; i <= yellow / 2; i++) {
    if (yellow % i == 0)
      i > yellow / i ? null : yellowSize.push([yellow / i, i]);
  }

  for (let [w, h] of yellowSize) {
    if ((w + h) * 2 + 4 == brown) {
      return [w + 2, h + 2];
    }
  }
}
