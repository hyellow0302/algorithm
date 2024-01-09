function solution(k, dungeons) {
  var answer = -1;
  var queue = [...dungeons];
  var visited = new Array(dungeons.length).fill(false);
  var adventure = 0;
  let count = 0;
  let health = k;
  // console.log(queue, visited)

  function dungeonsTour(health, count) {
    if (answer < count) answer = count;

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && health >= dungeons[i][0]) {
        visited[i] = true;

        dungeonsTour(health - dungeons[i][1], count + 1);

        visited[i] = false;
      }
    }
  }

  dungeonsTour(k, 0);

  return answer;
}
