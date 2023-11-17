/*  BFS, 감이 잡히는데 ..... refresh하고 다시 봐야겠음 (채점 결과는 아래 주석) */

function solution(maps) {
  var answer = 0;
  var availableRoute = [[0, 0]];

  // javascript에서는 isEmpty 함수가 없으니 만듦.
  const isEmpty = (arrayProps) => {
    // console.log(arrayProps.length)
    return arrayProps.length == 0;
  };

  while (true) {
    if (availableRoute.length == 0) {
      break;
    }
    // X, Y 인덱스를 대입하고 이동할 수 있는 길인지 확인
    var configX = [1, -1, 0, 0];
    var configY = [0, 0, 1, -1];
    var route = availableRoute.shift();
    var routeX = route[1];
    var routeY = route[0];
    var maxX = maps[0].length;
    var maxY = maps.length;

    for (var i = 0; i < 4; i++) {
      var nextX = routeX + configX[i];
      var nextY = routeY + configY[i];

      // 범위 벗어남 체크
      if (nextY >= maxY || nextX >= maxX || nextY < 0 || nextX < 0) {
        continue;
      }

      // 벽 체크
      if (maps[nextY][nextX] == 0) {
        continue;
      }

      // console.log(maps[routeY][routeX])

      if (maps[nextY][nextX] == 1) {
        if (nextY == 0 && nextX == 0) continue;
        // console.log("nextY: ", nextY, "nextX: ", nextX)
        maps[nextY][nextX] = maps[routeY][routeX] + 1;
        // console.log(availableRoute)
        availableRoute.push([nextY, nextX]);
        // availableRoute.push([1,2])
        // console.log(availableRoute)
      }
    }
    // console.log(maps)
  }
  // console.log(maps)
  return maps[maxX - 1][maxY - 1] == 1 ? -1 : maps[maxX - 1][maxY - 1];
}

/* 
    테스트
    테스트 1 〉	실패 (0.20ms, 33.5MB)
    테스트 2 〉	실패 (런타임 에러)
    테스트 3 〉	실패 (런타임 에러)
    테스트 4 〉	통과 (0.20ms, 33.6MB)
    테스트 5 〉	실패 (0.21ms, 33.4MB)
    테스트 6 〉	실패 (런타임 에러)
    테스트 7 〉	통과 (0.23ms, 33.1MB)
    테스트 8 〉	실패 (런타임 에러)
    테스트 9 〉	실패 (런타임 에러)
    테스트 10 〉	통과 (0.21ms, 33.6MB)
    테스트 11 〉	실패 (런타임 에러)
    테스트 12 〉	통과 (0.20ms, 33.6MB)
    테스트 13 〉	실패 (런타임 에러)
    테스트 14 〉	실패 (런타임 에러)
    테스트 15 〉	통과 (0.20ms, 33.5MB)
    테스트 16 〉	통과 (0.18ms, 33.4MB)
    테스트 17 〉	실패 (런타임 에러)
    테스트 18 〉	실패 (런타임 에러)
    테스트 19 〉	실패 (0.11ms, 33.6MB)
    테스트 20 〉	통과 (0.08ms, 33.5MB)
    테스트 21 〉	통과 (0.09ms, 33.5MB)

    효율성  테스트
    테스트 1 〉	통과 (6.13ms, 37.9MB)
    테스트 2 〉	실패 (런타임 에러)
    테스트 3 〉	통과 (5.52ms, 37.6MB)
    테스트 4 〉	통과 (4.86ms, 37.5MB)

    채점 결과
    정확성: 25.6
    효율성: 22.6
    합계: 48.1 / 100.0
*/
