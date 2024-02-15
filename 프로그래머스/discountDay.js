function solution(want, number, discount) {
  var answer = 0;
  let dcDay = [];
  var copy = [];
  let count = 0;
  // console.log(want.length, discount.length)
  for (let k = 0; k <= want.length; k++) {
    for (let l = 0; l < number[k] - 1; l++) {
      want.push(want[k]);
    }
  }
  // console.log("전처리: ", want)

  for (let i = 0; i <= discount.length - 10; i++) {
    dcDay = discount.slice(i, i + 10);
    // console.log("idx: ", i , "이번주 세일: ", dcDay)

    for (let j = 0; j <= want.length; j++) {
      if (dcDay.includes(want[j])) {
        let idx = dcDay.indexOf(want[j]);
        dcDay.splice(idx, 1);
        // console.log("오 이거 할인받네요", want[j], dcDay)
        count++;
      }
    }

    // console.log(dcDay)
    if (count == want.length) {
      // console.log("아니 젠장 다 할인받는데?")
      answer++;
    }
    count = 0;
  }

  return answer;
}
