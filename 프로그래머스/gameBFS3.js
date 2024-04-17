/* BFS, 3회차.. 그래도 주석도 달았고 조금 만족한다. */

function solution(maps) {
  var answer = 0;
  var queue = [];

  // 시작점 명시
  queue.push([0, 0]);

  while (!(queue.length == 0)) {
    /* 현재 서 있는 위치 담기 */
    var node = queue.shift(); // 현재 서 있는 길 좌표
    var nodeX = node[1]; // 현재 서 있는 길 X 좌표
    var nodeY = node[0]; // 현재 서 있는 길 Y 좌표

    /* 현재 위치에서 동서남북 갈 수 있는 길인지 확인하기 위해 config 과정 거치기 */
    var configX = [1, -1, 0, 0];
    var configY = [0, 0, -1, 1];

    for (var i = 0; i < 4; i++) {
      var nextX = nodeX + configX[i];
      var nextY = nodeY + configY[i];

      /* 다음 갈 X 좌표가 맵 범위 안에 있는건지, 다음 갈 Y 좌표가 맵 범위 안에 있는건지, 길이 맞는지 for문으로 동서남북 확인*/
      if (
        nextX >= 0 &&
        nextX < maps[0].length &&
        nextY >= 0 &&
        nextY < maps.length
      ) {
        if (maps[nextY][nextX] == 1) {
          queue.push([nextY, nextX]);
          maps[nextY][nextX] = maps[nodeY][nodeX] + 1; // 몇번째 길인지 표시하기 위함
        }
      }
    }
  }
  /* answer 설정해주기 */
  answer = maps[maps.length - 1][maps[0].length - 1]; // 상대 팀 진영은 늘 오른쪽하단에 있으므로 length-1 만큼
  if (answer == 1) return (answer = -1); // 그냥 1일경우 어떤 경로로도 도착하지 못함을 의미함. 따라서 -1 반환

  return answer;
}
