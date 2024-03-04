function solution(n, arr1, arr2) {
  let answer = [];
  let string = "";

  arr1.forEach(
    (number, idx) => (arr1[idx] = String(number.toString(2)).padStart(n, "0"))
  );
  arr2.forEach(
    (number, idx) => (arr2[idx] = String(number.toString(2)).padStart(n, "0"))
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] == 1 || arr2[i][j] == 1) string += "#";
      else string += " ";
    }
    answer.push(string);
    string = "";
  }

  return answer;
}
