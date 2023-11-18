/* DFS, 도움 많이 받음.. 다시 해보고싶음 */
function solution(places) {
  var nodeX = 0; // 현재 위치 X
  var nodeY = 0; // 현재 위치 Y
  var state = 1;
  var mht = 0;
  var result = null;
  var waitRoom = [];
  var visitedRoom = [];
  var answer = [];

  function dfs(nodeY, nodeX, mht) {
    if (mht > 2) return;
    if (state == 0) return;
    if (nodeY >= 5 || nodeY < 0 || nodeX >= 5 || nodeX < 0) return;
    if (visitedRoom[nodeY][nodeX] == true) return;
    if (waitRoom[nodeY][nodeX] == "X") return;
    if (mht != 0 && waitRoom[nodeY][nodeX] == "P") {
      state = 0;
      return;
    } else {
      visitedRoom[nodeY][nodeX] = true;
      dfs(nodeY + 1, nodeX, mht + 1);
      dfs(nodeY - 1, nodeX, mht + 1);
      dfs(nodeY, nodeX + 1, mht + 1);
      dfs(nodeY, nodeX - 1, mht + 1);
    }
  }

  // 대기실이 5개니까 5번 돌기
  for (var i = 0; i < 5; i++) {
    mht = 0;
    state = 1;
    waitRoom = places[i];
    visitedRoom = [];

    // 방문기록 따지기
    for (var j = 0; j < 5; j++) {
      visitedRoom.push([false, false, false, false, false]);
    }

    // 인덱스 구별을 위한 문자열 나누기
    for (var k = 0; k < 5; k++) {
      waitRoom[k] = waitRoom[k].split("");
    }

    // P 찾기
    // console.log(i, "번째 대기실")
    outer: for (var t = 0; t < 5; t++) {
      inner: for (var r = 0; r < 5; r++) {
        // console.log(t,r)
        if (waitRoom[t][r] == "P") {
          // console.log(t, r)
          // console.log(state
          nodeY = t;
          nodeX = r;
          dfs(nodeY, nodeX, mht);
          // console.log(state)
          if (state == 0) break outer;
        }
      }
    }
    if (state == 0) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  }

  return answer;
}
