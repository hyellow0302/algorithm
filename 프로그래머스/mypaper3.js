function solution(sizes) {
  var answer = 0;
  let w = 0;
  let h = 0;

  sizes.forEach((paper) => {
    if (paper[0] < paper[1]) {
      w = Math.max(w, paper[1]);
      h = Math.max(h, paper[0]);
    } else {
      w = Math.max(w, paper[0]);
      h = Math.max(h, paper[1]);
    }
  });

  return (answer = w * h);
}
