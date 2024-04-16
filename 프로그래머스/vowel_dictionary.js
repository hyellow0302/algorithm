function solution(word) {
  var answer = 0;
  let dictionary = ["A", "E", "I", "O", "U"];
  let all = [];

  const Dictionary = (str) => {
    if (str.length > 4) return;
    for (let i = 0; i < dictionary.length; i++) {
      let rest = str + dictionary[i];
      all.push(rest);
      if (rest == word) {
        answer = all.length;
        break;
      }
      Dictionary(rest);
    }

    return answer;
  };

  answer = Dictionary("");

  return answer;
}
