function solution(s) {
  var answer = [];

  s = s.split(" ");

  for (let i = 0; i < s.length; i++) {
    let str = s[i].split("");
    for (let j = 0; j < s[i].length; j++) {
      let idx = j + 1;
      if (idx % 2 != 0) str[j] = str[j].toUpperCase();
      else str[j] = str[j].toLowerCase();
    }
    answer.push(str.join(""));
  }

  return answer.join(" ");
}
