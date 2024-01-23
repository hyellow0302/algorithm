function solution(routes) {
  let answer = 1;

  routes.sort((a, b) => a[0] - b[0]);

  let end = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    if (end < routes[i][0]) {
      answer++;
      end = routes[i][1];
    }

    if (end > routes[i][1]) {
      end = routes[i][1];
    }
  }

  return answer;
}
