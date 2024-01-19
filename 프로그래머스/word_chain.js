function solution(n, words) {
  var answer = [];
  var wordList = [];
  var lastWord = "";
  var turn = 1;

  for (let i = 0; i < words.length; i++) {
    if (i != 0 && i % n == 0) {
      turn++;
    }
    if (wordList.includes(words[i])) {
      break;
    }
    if (i != 0 && words[i][0] != lastWord) break;
    wordList.push(words[i]);
    lastWord = words[i][words[i].length - 1];
  }
  if (wordList.length % n == 0 && words.length == wordList.length) {
    answer.push(0, 0);
  } else {
    answer.push((wordList.length % n) + 1);
    answer.push(turn);
  }

  return answer;
}
