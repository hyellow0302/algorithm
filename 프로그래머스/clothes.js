/* 
[알고리즘 고득점 Kit - 해시] 의상 
headgear 2개와 eyewear 1개가 입력되었을 때 안입는다는 선택지를 넣어서
headgear 3개와 eyewear 2개로 만들어준 다음
3*2-1
했을 때 답이 나온다. (-1은 두개 모두 안입었을 경우의 수 하나를 빼준 것)
*/

function solution(clothes) {
  var answer = clothes.length; // 의상이 하나밖에 없는지 검사하기 위해 length를 넣어준다.
  let mtp = 1; // 착용할 수 있는 경우의 수를 구하기 위한 곱셈에 이용된다.
  myCloset = {}; // 옷의 종류: 개수 를 담는다.
  let value = 1; // myCloset의 value값으로 들어갈 값이다.
  kind = []; // 옷의 종류마다 몇개씩 있는지 확인한다. 즉, myCloset의 value값을 담을 배열이다.

  // 의상이 하나라면 조합할게 없으므로 착용할 수 있는 경우의 수는 1 return
  if (answer == 1) return answer;

  // 옷의 개수만큼 반복문을 돌아 myCloset을 만듭니다.
  for (var i = 0; i < clothes.length; i++) {
    key = clothes[i][1]; // 옷의 종류

    // 이미 myClosetd에 없는 새로운 옷 종류인가?
    if (Object.hasOwn(myCloset, key) == false) {
      value = 2;
      myCloset[key] = value;
    }
    // myCloset에 있는 옷 종류인가?
    else {
      value = myCloset[key] + 1;
      myCloset[key] = value;
    }
  }

  // 종류별로 개수를 kind 배열에 담기
  kind = Object.values(myCloset);
  for (let j = 0; j < kind.length; j++) {
    mtp *= kind[j];
  }
  // 아예 아무것도 안입었을 경우를 빼주기
  answer = mtp - 1;

  return answer;
}
