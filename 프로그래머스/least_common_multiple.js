function solution(arr) {
  let answer = arr[0];
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];

    while (arr[i] % answer != 0) {
      arr[i] += num;
    }
    answer = arr[i];
  }

  return answer;
}
