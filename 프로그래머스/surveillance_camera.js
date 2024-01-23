function solution(routes) {
  var answer = 0;
  let start,
    end = 0;
  let idx = 0;
  let nextStart,
    nextEnd = 0;
  let sliceArr = [];

  if (routes.length == 1) return 1;

  routes.sort((a, b) => a[0] - b[0]);

  while (routes.length != 0) {
    sliceArr = [];
    [start, end] = routes.shift();

    for (let i = 0; i < routes.length; i++) {
      [nextStart, nextEnd] = routes[i];
      if (start <= nextStart && nextStart <= end) {
        sliceArr.push(i);
      }
    }
    if (answer == 0 && sliceArr.length == routes.length) continue;
    sliceArr.sort((a, b) => b - a);
    for (let j = 0; j < sliceArr.length; j++) {
      routes.splice(sliceArr[j], 1);
    }
    answer++;
  }

  if (answer == 0) answer = 1;

  return answer;
}
