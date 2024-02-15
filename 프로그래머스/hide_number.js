function solution(phone_number) {
  let answer = "";
  let phoneIdx = phone_number.length - 4;
  let phoneStr = phone_number.substr(phoneIdx, phone_number.length);

  for (let i = 0; i < phoneIdx; i++) {
    answer += "*";
  }

  return answer + phoneStr;
}
