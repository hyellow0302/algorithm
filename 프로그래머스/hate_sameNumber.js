function solution(arr) {
  var answer = [];
  var idx = 0;
  var set = {};

  answer.push(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    if (answer[idx] != arr[i]) {
      answer.push(arr[i]);
      idx++;
    }
  }

  console.log(answer);

  return answer;
}
