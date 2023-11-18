/* DFS, 혼자 해냈다! */
function solution(places) {
  var answer = [];
  var room = []; // places에 속한 n번째 대기실을 담을 배열
  var visitedRecord = [];
  var state = 1; // n번째 대기실의 거리두기 상황
  var nodeX = 0; // 현재 X 좌표
  var nodeY = 0; // 현재 Y 좌표
  var mht = 0; // 현재 좌표 기준 맨해튼 거리

  function dfs(nodeX, nodeY, mht) {
    if (mht > 2) return;
    if (state == 0) return;
    if (nodeX > 4 || nodeX < 0 || nodeY > 4 || nodeY < 0) return;
    if (room[nodeY][nodeX] == "X") return;
    if (visitedRecord[nodeY][nodeX] == true) return;
    if (mht == 0 || room[nodeY][nodeX] != "P") {
      visitedRecord[nodeY][nodeX] = true;
      dfs(nodeX + 1, nodeY, mht + 1);
      dfs(nodeX - 1, nodeY, mht + 1);
      dfs(nodeX, nodeY + 1, mht + 1);
      dfs(nodeX, nodeY - 1, mht + 1);
    } else {
      state = 0;
    }
  }

  for (var i = 0; i < 5; i++) {
    state = 1;
    visitedRecord = [];
    room = places[i];

    /* 문자열 쪼개서 배열화 */
    for (var j = 0; j < 5; j++) {
      room[j] = room[j].split("");
    }

    for (var k = 0; k < 5; k++) {
      visitedRecord.push([false, false, false, false, false]);
    }

    /* P 찾기 */
    outer: for (var m = 0; m < 5; m++) {
      inner: for (var n = 0; n < 5; n++) {
        if (room[m][n] == "P") {
          nodeX = n;
          nodeY = m;
          mht = 0;
          dfs(nodeX, nodeY, mht); // 찾은 P 주변을 dfs함수 호출해서 거리두기가 되었는지 확인
          if (state == 0) {
            // 거리두기가 하나라도 안되어 있을 경우
            answer.push(0);
            break outer;
          }
        }
      }
    }
    if (state == 1) answer.push(1); // P 주변을 다 돌았는데도 거리두기 상태가 1인 경우
  }

  return answer;
}
