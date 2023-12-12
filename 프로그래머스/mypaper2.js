function solution(sizes) {
  var spaceLong = [];
  var spaceShort = [];
  var answer = 0;

  sizes.forEach(([row, column]) => {
    if (row >= column) {
      spaceLong.push(row);
      spaceShort.push(column);
    } else if (row < column) {
      spaceLong.push(column);
      spaceShort.push(row);
    }
  });

  spaceLong.sort((a, b) => b - a);
  spaceShort.sort((a, b) => b - a);

  answer = spaceLong[0] * spaceShort[0];

  return answer;
}
