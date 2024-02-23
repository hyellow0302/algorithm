function solution(k, score) {
  let answer = [];
  let temple = [];

  temple.push(score[0]);
  answer.push(score[0]);
  // console.log(temple, score, answer)

  for (let i = 1; i < score.length; i++) {
    let nowScore = score[i];
    // console.log(nowScore, temple[0])
    if (temple.length < k) {
      temple.push(nowScore);
      temple.sort((a, b) => a - b);
    } else if (temple[0] <= nowScore) {
      temple.shift();
      temple.push(nowScore);
    }
    temple.sort((a, b) => a - b);
    answer.push(temple[0]);
    // console.log("answer = ", answer)
    // console.log("temple = ", temple)
  }

  return answer;
}
