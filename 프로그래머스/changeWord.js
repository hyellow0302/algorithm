function solution(begin, target, words) {
  var answer = 1;
  var queue = [];
  var node = [];
  var depth = 0;
  var count = 0;
  var pushNumber = 0;
  var stop = false;

  /* 하나 하나 비교하기위한 문자열 처리 작업 */
  begin = begin.split("");
  target = target.split("");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("");
  }
  console.log(words);

  /* begin과 다른 걸 찾기, 시작점 찾기 */
  queue.push(begin);

  while (!stop) {
    if (pushNumber >= 2) {
      console.log("두개가 push 됩니다.", pushNumber);
      depth--;
      pushNumber = -55;
    }
    if (queue.includes(target)) {
      console.log("존재합니다");
      break;
    }
    if (queue.length == 0) {
      answer = 0;
      break;
    }
    console.log("다시 시작");
    node = queue.shift();
    console.log(node);

    console.log(node);

    for (let k = 0; k < words.length; k++) {
      count = 0;

      for (let l = 0; l < begin.length; l++) {
        if (words[k] == 0) continue;
        console.log(words[k]);
        console.log(node[l], words[k][l], l);
        if (node[l] == words[k][l]) {
          console.log("같네요 ", node[l], words[k][l]);
          count++;
        }
        if (count == 2) {
          if (JSON.stringify(target) === JSON.stringify(words[k])) {
            console.log("같은데요 target발견");
            stop = true;
            break;
          }
          queue.push(words[k]);
          console.log("다음 node입니다.", queue);
          words[k] = 0;
          pushNumber++;
        }
      }
    }
    depth++;
    console.log("depth증가", depth);

    if (depth > 5) {
      answer = 0;
      break;
    }
  }

  if (answer != 0) {
    answer = depth;
  }

  return answer;
}
