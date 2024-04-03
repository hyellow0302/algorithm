function solution(arr1, arr2) {
  let arrBox = [];
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      arrBox.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arrBox);
    arrBox = [];
  }

  return answer;
}
