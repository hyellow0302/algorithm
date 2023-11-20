/* 
    알고리즘 고득점 Kit - 정렬] K번째 수
    - 배운점 -
    javascript에서 제공되는 .sort()함수는 문자열로 바꾼뒤 정렬하기때문에 숫자정렬엔 부적합하다. 
    따라서 오름차순을 할때는 line 16번처럼 해야한다.
*/
function solution(array, commands) {
  var answer = [];
  var sliceArray = [];

  for (let i = 0; i < commands.length; i++) {
    sliceArray = [];
    startIdx = commands[i][0];
    endIdx = commands[i][1];
    selectIdx = commands[i][2] - 1;

    sliceArray = array.slice(startIdx - 1, endIdx);
    sliceArray.sort((a, b) => a - b);
    result = sliceArray[selectIdx];

    answer.push(result);
  }

  return answer;
}
