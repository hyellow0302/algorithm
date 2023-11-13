// 2021 카카오 채용연계형 인턴십 - 숫자 문자열과 영단어

function solution(s) {
  var neoQuestion = s;
  var answer = [];
  var minString = "";
  var numberList = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  try {
    if (neoQuestion.length > 50 || neoQuestion.length < 1) {
      throw new Error("s의 범위를 넘어섭니다.");
    }
    if (s.indexOf("zero") == 0 || s.indexOf("0") == 0) {
      throw new Error("zero 또는 0으로 시작되었습니다. 다시 문제를 내주세요.");
    }
  } catch (e) {
    console.log(neoQuestion.length);
    console.log(e);
  }

  while (neoQuestion.length != "") {
    // console.log("-")
    var min = 50;
    for (var j = 0; j < numberList.length; j++) {
      var temp = neoQuestion.indexOf(numberList[j]);
      // console.log("현재 비굣값: ", numberList[j])
      if (min > temp && temp != -1) {
        // console.log("해당 사항 있습니다.")
        // console.log("바로바로: ", temp)
        min = temp;
        minString = numberList[j];
      }
    }

    var result = neoQuestion.substr(0, min + minString.length);
    if (result.length != minString.length && result.includes(minString)) {
      // console.log("혼합되어있군요?")
      // console.log(minString)
      // console.log(result)
      var splitString = result.split(minString);
      if (numberList.indexOf(splitString[0]) != -1) {
        answer.push(numberList.indexOf(splitString[0]));
      } else answer.push(splitString[0]);
      if (numberList.indexOf(result.split(splitString[0])[1]) != -1) {
        answer.push(numberList.indexOf(result.split(splitString[0])[1]));
      } else answer.push(result.split(splitString[0])[1]);
    } else {
      // console.log("혼합되어있지않군요!")
      if (numberList.indexOf(result) != -1) {
        answer.push(numberList.indexOf(result));
      } else answer.push(result);
    }
    // console.log(result)
    neoQuestion = neoQuestion.replace(
      neoQuestion.substr(0, min + minString.length),
      ""
    );
    // console.log("남은 neo상태: ", neoQuestion)
    // console.log(answer)
  }

  answer = Number(answer.join(""));

  if (answer < 1 || answer > 2000000000) {
    throw new Error(
      "return 값이 1 이상 2,000,000,000 이하의 범위를 벗어납니다."
    );
  }

  return answer;
}
