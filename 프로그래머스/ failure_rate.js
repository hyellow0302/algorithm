function solution(N, stages) {
  let answer = [];
  let playerState = {};
  let failedScore = {};
  let failedArr = [];
  let pass = stages.length;

  stages.sort((a, b) => a - b);

  for (let i = 1; i <= N + 1; i++) {
    playerState[i] = 0;
    failedScore[i] = 0;
  }

  for (let j = 0; j < stages.length; j++) {
    let failed = stages[j];
    playerState[failed.toString()] += 1;
    if (stages[j] != stages[j + 1]) {
      failedScore[failed.toString()] = playerState[failed.toString()] / pass;
      pass -= playerState[failed.toString()];
    }
  }

  for (let k = 1; k < N + 1; k++) {
    failedArr.push([k, failedScore[k.toString()]]);
  }

  failedArr.sort((a, b) => b[1] - a[1]);

  for (let l = 0; l < N; l++) {
    answer.push(failedArr[l][0]);
  }

  return answer;
}
