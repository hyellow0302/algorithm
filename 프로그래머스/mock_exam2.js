function solution(answers) {
  var score = [];
  let max = 0;
  let scores = [0, 0, 0];
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];
    let firstAnswer = first[i % first.length];
    let secondAnswer = second[i % second.length];
    let thirdAnswer = third[i % third.length];

    if (answer == firstAnswer) scores[0] += 1;
    if (answer == secondAnswer) scores[1] += 1;
    if (answer == thirdAnswer) scores[2] += 1;
  }

  for (let j = 0; j < scores.length; j++) {
    if (max < scores[j]) {
      max = scores[j];
      score = [];
      score.push(j + 1);
    } else if (max == scores[j]) {
      score.push(j + 1);
    }
  }

  return score;
}
