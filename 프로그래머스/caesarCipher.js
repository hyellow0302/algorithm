function solution(s, n) {
  var answer = "";

  const upperCase = (ascii) => {
    ascii += n;
    if (ascii > 90) ascii -= 26;
    return ascii;
  };

  const lowerCase = (ascii) => {
    ascii += n;
    if (ascii > 122) ascii -= 26;
    return ascii;
  };

  for (let i = 0; i < s.length; i++) {
    let str = s[i];

    if (str == " ") {
      answer += " ";
      continue;
    }

    let ascii = str.charCodeAt();

    if (ascii < 91) ascii = upperCase(ascii);
    else ascii = lowerCase(ascii);

    answer += String.fromCharCode(ascii);
  }

  return answer;
}
