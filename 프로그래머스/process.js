function solution(priorities, location) {
  var answer = 0;
  var returnCnt = 0;
  var maxNumber = 0;
  var process = 0;
  var sortPriorities = [...priorities];

  while (priorities.length != 0) {
    sortPriorities.sort((a, b) => b - a);
    maxNumber = sortPriorities[0];
    // console.log("현재 최댓값을 구하는 배열", sortPriorities[0])

    process = priorities.shift();
    // console.log("현재 프로세스", process)

    if (process != maxNumber) {
      priorities.push(process);
      if (location == 0) location = priorities.length - 1;
      else location -= 1;
      // console.log("뒤로 보냈습니다.", priorities, location)
    } else {
      returnCnt++;
      sortPriorities.shift();
      if (location == 0) {
        // console.log("드디어 나갑니다!", returnCnt)
        answer = returnCnt;
        break;
      }
      // console.log("오 .. 하나 빠져나가네요", priorities, location)
      if (location != 0) location -= 1;
    }
  }

  return answer;
}
