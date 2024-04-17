// 정답은 맞으나, 효율성 X

function solution(maps) {
  let n = maps[0].length;
  let m = maps.length;
  var min = n * m + 1;
  let recordArr = Array.from(Array(m), () => Array(n).fill(false));
  let root = 0;

  const bfs = (x, y, root, visited) => {
    let visit = JSON.parse(JSON.stringify(visited));
    if (x < 0 || x >= n) return;
    if (y < 0 || y >= m) return;
    if (maps[y][x] == 0 || visited[y][x] == true) return;

    visit[y][x] = true;

    if (y == m - 1 && x == n - 1) {
      min = Math.min(min, root);
      return;
    }

    bfs(x + 1, y, root + 1, visit); // 오른쪽으로 이동
    bfs(x - 1, y, root + 1, visit); // 왼쪽으로 이동
    bfs(x, y + 1, root + 1, visit); // 밑으로 이동
    bfs(x, y - 1, root + 1, visit); // 위로 이동
  };

  bfs(0, 0, 1, recordArr);

  return min == m * n + 1 ? -1 : min;
}
