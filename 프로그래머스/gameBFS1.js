/* 제한시간 10초 넘어가는 실패 코드 */

function solution(maps) {
  // Moving 중요도: Right -> Left -> Down -> Up
  var prevState = "null";
  var i = 0;
  var j = 0;
  var count = 0;
  var answer = 0;
  // console.log(maps[0][i]);

  while (i != maps.length && j != maps[0].length) {
    switch (prevState) {
      case "null": // [0,0]에서 시작하는 경우
        if (maps[i][j + 1] == 1) {
          j++;
          count++;
          prevState = "rightMoving";
          // console.log("시작 지점에서 ", prevState, " 방향으로 이동합니다.");
        } else {
          i++;
          prevState = "downMoving";
          // console.log("시작 지점에서 ", prevState, " 방향으로 이동합니다.");
        }
        break;
      case "rightMoving":
        if ((j = 5 && maps[i][j + 1] == 1)) {
          j++;
          count++;
          prevState = "rightMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        } else if (i != 5 && maps[i + 1][j] == 1) {
          i++;
          count++;
          prevState = "downMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        } else if (i != 0 && maps[i - 1][j] == 1) {
          i--;
          count++;
          prevState = "upMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        }
        break;
      case "leftMoving":
        if (j != 0 && maps[i][j - 1] == 1) {
          i--;
          count++;
          prevState = "leftMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        } else if (i != 5 && maps[i + 1][j] == 1) {
          i++;
          count++;
          prevState = "downMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        } else if (i != 0 && maps[i - 1][j] == 1) {
          i--;
          count++;
          prevState = "upMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        }
        break;
      case "upMoving":
        if (j != 5 && maps[i][j + 1] == 1) {
          j++;
          count++;
          prevState = "rightMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        } else if (i != 0 && maps[i - 1][j] == 1) {
          i--;
          count++;
          prevState = "upMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        } else if (j != 0 && maps[i][j - 1] == 1) {
          i--;
          count++;
          prevState = "leftMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        }
        break;
      case "downMoving":
        if (j != 5 && maps[i][j + 1] == 1) {
          j++;
          count++;
          prevState = "rightMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        } else if (i != 5 && maps[i + 1][j] == 1) {
          i++;
          count++;
          prevState = "downMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        } else if (j != 0 && maps[i][j - 1] == 1) {
          i--;
          count++;
          prevState = "leftMoving";
          // console.log("현재 지점에서 ", prevState, " 방향으로 이동합니다.");
        }
        break;
    }
    // console.log("한칸 움직였습니다. 현재 좌표: []", i, ",", j, "]");
  }
  return count;
}
