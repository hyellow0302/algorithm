function solution(n, computers) {
  // 1. 네트워크마다 방문해야하니까 네트워크개수만큼의 배열 선언하여 방문 기록 남기기 (visited 배열 선언 이유)
  let answer = 0;
  const visited = Array.from({ length: n }, () => 0);
  console.log(visited);

  // 3. 하나의 네트워크가 서로 연결되어있음을 확인하고 확인한 곳은 무한루프를 방지하기위해 1로 바꿔주는 작업 진행
  function connectDFS(idx) {
    visited[idx] = 1; // 지금 방문했으니 1로 바꿔주기

    for (let j = 0; j < n; j++) {
      // 한 네트워크 배열 안에 요소만큼 반복
      if (computers[idx][j] == 1 && visited[j] == 0) {
        // 현재 네트워크 속 요소가 1이고, 방문한 적이 없는 곳이라면
        visited[j] = 1; // 방문표시 1로 바꿔주고
        connectDFS(j); // 그 네트워크 안에서 또 돌아보고 오기
      }
    }
  }

  // 2.네트워크를 하나씩 검사하며 연결되어있는 것을 확인해야하기때문에 배열의 개수(n)만큼 반복
  for (let i = 0; i < n; i++) {
    if (visited[i] == 0) {
      // 방문을 안한 곳이라면
      visited[i] = 1; // 방문을 이제 할테니까 미리 1로 바꿔주고
      connectDFS(i); // 어디랑 연결되어있는지 돌아보고 오기
      answer++; // 끝나면 한 네트워크를 다 보고 온 것으로 +1
    }
  }

  return answer;
}
