function solution(number, k) {
  var answer = "";
  let arr = [];
  let returnLen = number.length - k;
  let end = 0;
  let max = 0;

  number = number.split("");
  console.log(number);

  for (let i = 0; i < returnLen; i++) {
    end = number.length - (returnLen - i);
    arr = number.slice(0, end + 1);
    console.log(end, arr, number);

    max = Math.max(...arr);
    number.splice(0, number.indexOf(max.toString()) + 1);

    answer += max.toString();
  }

  return answer;
}
