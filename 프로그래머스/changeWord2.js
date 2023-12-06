function solution(begin, target, words) {
  var answer = 0;
  var queue = [];
  var visited = Array.from({ length: words.length }, () => false);
  var count = 0;

  /* 하나 하나 비교하기위한 문자열 처리 작업 */
  begin = begin.split("");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("");
  }
  console.log(words);

  /*  */
  queue.push([begin, 0]);
  console.log(queue);

  /*  */
  while (queue.length != 0) {
    var node = queue.shift();
    var myWord = node[0];
    var idx = node[1];
    var checkNumber = begin.length - 1;
    console.log(node, myWord, idx);

    console.log(myWord.toString());
    console.log(myWord, target);

    if (myWord.join("") == target) {
      console.log("목표도달");
      answer = idx;
      break;
    }

    for (let i = 0; i < words.length; i++) {
      console.log("--");
      count = 0;
      if (visited[i] == true) continue;
      for (let j = 0; j < begin.length; j++) {
        console.log("현재 i, j상태: ", i, j);
        console.log("비교중", myWord[j], words[i][j]);
        if (myWord[j] == words[i][j]) {
          console.log("이 글자는 같네요");
          ++count;
        }
        if (count >= checkNumber) {
          console.log("다음 문자로 추가됩니다.", words[i]);
          queue.push([words[i], idx + 1]);
          visited[i] = true;
          console.log(queue);
        }
      }
    }
  }

  return answer;
}
