/* 45% 성공 */
function solution(sizes) {
  var sortRow = [];
  var sortColumn = [];
  var maxRow = 0;
  var maxColumn = 0;
  var answer = 0;

  sizes.sort((a, b) => b[1] - a[1]);
  sortColumn = [...sizes];
  sortRow = sizes.sort((a, b) => b[0] - a[0]);
  // console.log(sortRow, sortColumn)

  console.log("row검사");
  for (let i = 0; i < sizes.length; i++) {
    maxRow = sortRow[0][0];
    maxColumn = sortColumn[0][1];
    console.log("현재 maxRow", maxRow, "현재 maxColumn", maxColumn);

    if (maxRow > sortRow[0][1] && maxRow < maxColumn) {
      console.log("조건에 부합하네요", maxRow, "를 바꿉니다.");
      let empty = 0;
      empty = sortRow[0][0];
      sortRow[0][0] = sortRow[0][1];
      sortRow[0][1] = empty;
      console.log("변경완료", sortRow[0]);

      sortRow = sizes.sort((a, b) => b[0] - a[0]);
    } else break;
  }

  console.log("column검사");
  for (let i = 0; i < sizes.length; i++) {
    maxRow = sortRow[0][0];
    maxColumn = sortColumn[0][1];
    console.log("현재 maxRow ", maxRow, "현재 maxColumn", maxColumn);

    if (maxColumn > sortColumn[0][0] && maxColumn < maxRow) {
      console.log("조건에 부합하네요", maxColumn, "를 바꿉니다.");
      let empty = 0;
      empty = sortColumn[0][0];
      sortColumn[0][0] = sortColumn[0][1];
      sortColumn[0][1] = empty;
      console.log("변경완료", sortColumn[0]);

      sortColumn.sort((a, b) => b[1] - a[1]);
    } else break;
  }

  maxRow = sortRow[0][0];
  maxColumn = sortColumn[0][1];

  answer = maxRow * maxColumn;

  return answer;
}
