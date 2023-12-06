function solution(n, computers) {
  var answer = 0;
  var pathRecord = [];

  function connectNetwork(network, index) {
    console.log("-----현재 스코어----", network, index, answer);
    if (pathRecord.includes(network.toString() + index.toString)) return;
    if (index >= n) {
      index = 0;
      network++;
    }
    if (index < 0 || network >= n || network < 0) return;

    if (
      computers[network][index] == 1 &&
      !pathRecord.includes(network.toString() + index.toString()) &&
      computers[index][network] == 1
    ) {
      pathRecord.push(network.toString() + index.toString());

      console.log("1입니다.", network, index);
      answer++;

      if (network != index) {
        if (!pathRecord.includes(index.toString() + network.toString())) {
          console.log(index, network, " 경로 추가중");
          pathRecord.push(index.toString() + network.toString());
          console.log(pathRecord);
        } else {
          console.log(index, network, " 경로가 존재하네요? --연산중");
          answer--;
        }
        if (!pathRecord.includes(network.toString() + network.toString())) {
          console.log(network, network, " 경로 추가중");
          pathRecord.push(network.toString() + network.toString());
          console.log(pathRecord);
        } else {
          console.log(network, network, " 경로가 존재하네요? --연산중");
          answer--;
        }
        if (!pathRecord.includes(index.toString() + index.toString())) {
          console.log(index, index, " 경로 추가중");
          pathRecord.push(index.toString() + index.toString());
          console.log(pathRecord);
        } else {
          console.log(index, index, "경로가 존재하네요? --연산중");

          answer--;
        }
      }
    }
    console.log("다음 넘어갑니당");
    connectNetwork(network, index + 1);
  }

  connectNetwork(0, 0);

  return answer;
}
