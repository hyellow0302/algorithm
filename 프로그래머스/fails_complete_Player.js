/* hash알고리즘 문제인데 hash로 안풀었음. 다음엔 hash이용해보자 */
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  completion.push("0");

  for (var i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      return participant[i];
    }
  }
}
