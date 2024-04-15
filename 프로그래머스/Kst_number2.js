function solution(array, commands) {
  let answer = [];
  let sliceArr = [];

  for (let [i, j, k] of commands) {
    if (i == j) answer.push(array[i - 1]);
    else {
      sliceArr = array.slice(i - 1, j);
      sliceArr.sort((a, b) => a - b);
      answer.push(sliceArr[k - 1]);
    }
  }

  return answer;
}
