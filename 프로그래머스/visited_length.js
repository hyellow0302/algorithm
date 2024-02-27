function solution(dirs) {
  var answer = 0;
  let me = [0, 0];
  let visited = [];
  let move = dirs.split("");
  let route1 = "";
  let route2 = "";
  let before = [];

  for (let i = 0; i < move.length; i++) {
    before[0] = me[0];
    before[1] = me[1];
    switch (move[i]) {
      case "U":
        [me, route1, route2] = up(me);
        break;
      case "D":
        [me, route1, route2] = down(me);
        break;
      case "L":
        [me, route1, route2] = left(me);
        break;
      case "R":
        [me, route1, route2] = right(me);
        break;
    }

    if (
      (before[0] !== me[0] || before[1] !== me[1]) &&
      visited.includes(route1) == false &&
      visited.includes(route2) == false
    ) {
      visited.push(route1);
      visited.push(route2);
      answer++;
    }
  }

  return answer;
}

function up(me) {
  let str1 = me[0].toString() + me[1].toString() + "U";
  me[1] += 1;
  if (Math.abs(me[0]) > 5 || Math.abs(me[1]) > 5) me[1] -= 1;
  let str2 = me[0].toString() + me[1].toString() + "D";
  return [me, str1, str2];
}

function down(me) {
  let str1 = me[0].toString() + me[1].toString() + "D";
  me[1] -= 1;
  if (Math.abs(me[0]) > 5 || Math.abs(me[1]) > 5) me[1] += 1;
  let str2 = me[0].toString() + me[1].toString() + "U";
  return [me, str1, str2];
}

function left(me) {
  let str1 = me[0].toString() + me[1].toString() + "L";
  me[0] -= 1;
  if (Math.abs(me[0]) > 5 || Math.abs(me[1]) > 5) me[0] += 1;
  let str2 = me[0].toString() + me[1].toString() + "R";
  return [me, str1, str2];
}

function right(me) {
  let str1 = me[0].toString() + me[1].toString() + "R";
  me[0] += 1;
  if (Math.abs(me[0]) > 5 || Math.abs(me[1]) > 5) me[0] -= 1;
  let str2 = me[0].toString() + me[1].toString() + "L";
  return [me, str1, str2];
}
