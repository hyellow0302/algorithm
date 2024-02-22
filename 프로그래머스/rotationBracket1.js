function solution(s) {
  let answer = 0;
  let count = s.length;
  let rightStr = { "{": 1, "}": -1, "[": 3, "]": -3, "(": 5, ")": -5 };
  let temp = "";
  let str = s.split("");
  console.log(str);

  for (let i = 0; i < count; i++) {
    console.log(i, answer, str);
    if (rightStr[str[0]] < 0) {
      console.log(rightStr[str[0]], "시작부터 이미 올바르지 않네용");
    } else {
      console.log("시작은 통과합니다.");
      let sum = 0;
      for (let j = 0; j < count; j++) {
        sum += rightStr[str[j]];
        console.log(str[j], sum);
        if (rightStr[str[j]] < 0 && sum != 0 && sum % 2 == 0) break;
        if (sum < 0) {
          console.log("마이너스네요 ㅋㅋ ");
          break;
        }
      }
      console.log("총 결과: ", sum);
      if (sum == 0) answer++;
    }

    temp = str.shift();
    str.push(temp);

    console.log(str);
  }

  return answer;
}
