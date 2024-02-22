function solution(s) {
  let answer = s.length;
  let close = ["]", "}", ")"];
  let sum = 0;
  let temp = "";
  let str = [];
  let bracket = [];

  str = s.split("");

  for (let i = 0; i < str.length; i++) {
    if (close.includes(str[0]) == true) {
      answer--;
      bracket = [];
    } else {
      for (let j = 0; j < str.length; j++) {
        if (close.includes(str[j]) == true) {
          if (bracket.length == 0) {
            answer--;
            bracket = [];
            break;
          }
          let asciiOpen = bracket.pop();
          asciiOpen = asciiOpen.charCodeAt();
          let asciiClose = str[j].charCodeAt();
          let minus = asciiClose - asciiOpen;
          if (minus != 1 && minus != 2) {
            answer--;
            bracket = [];
            break;
          }
        } else {
          bracket.push(str[j]);
        }
      }
    }
    if (bracket.length != 0) answer--;

    temp = str.shift();
    str.push(temp);
  }

  return answer;
}
