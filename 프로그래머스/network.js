function solution(n, computers) {
  var answer = 0;
  var count = 0;
  var pathRecord = [];

  function networkDFS(computerNumber, index) {
    count++;
    console.log(computerNumber, index);
    if (index >= n) {
      console.log("index 넘어갑니다. computerNumber 증가 중");
      computerNumber += 1;
      index = 0;
    }
    if (computerNumber >= n) {
      console.log("computerNumber 넘어갑니다.");
      return;
    }
    if (pathRecord.includes([computerNumber, index])) {
      console.log("이미 왔던 길입니다.");
      return;
    }
    if (computerNumber == index) return;

    pathRecord.push([computerNumber, index]);
    console.log(pathRecord);

    if (computers[computerNumber][index] == 1) {
      console.log("네트워크 연결이네요", computerNumber, index);
      networkDFS(computerNumber, index + 1);
    } else {
      console.log("네트워크가 연결이되지않았습니다. ", computerNumber, index);
      if (count > 1) answer += 1;
      count = 0;
      networkDFS(computerNumber + 1, index);
    }
  }

  networkDFS(0, 1);

  return answer;
}
