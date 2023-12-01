function solution(prices) {
  var answer = [];
  var count = 0;

  for (var i = 0; i < prices.length; i++) {
    count = 0;
    for (var j = i + 1; j < prices.length; j++) {
      // console.log("현재 count: ", count)
      // console.log(i, j)
      // console.log("값 비교: ", prices[i], prices[j])
      ++count;
      if (prices[i] > prices[j]) {
        // console.log("작아졌네요..")
        break;
      }
    }
    answer.push(count);
    // console.log(answer)
  }
  return answer;
}
