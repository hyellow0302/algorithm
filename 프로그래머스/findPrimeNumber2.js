function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  var answer = 0;
  var finished = [];
  var number = [];
  var prime = [];
  var str = "";
  var combine = "";
  var set = 0;

  number = numbers.split("");
  var visited = [];
  // console.log(number)

  function primeDFS(str, idx) {
    console.log("재귀함수 시작, str: ", str, " idx: ", idx);

    if (idx >= number.length || idx < 0) return;

    set = 0;
    visited.forEach((bool) => {
      if (bool == true) {
        set++;
        // console.log("true입니다. 현재 SET: ", set)
      }
    });
    if (set == number.length) {
      // console.log("다 돌았으니 종료합니다.", set, number.length, visited)
      return;
    }

    if (!(visited[idx] && finished.includes(Number(str)))) {
      // 수를 조합하기 위해 문자열을 더해주고, 소수인지/방문한 곳인지 확인 위해 int로 바꿔준 것도 선언한다.
      combine = str + number[idx];
      console.log("combine: ", combine);
      let str_to_int = Number(combine);

      // 방문기록에 넣어준다.
      finished.push(str_to_int);
      visited[idx] = true;
      console.log(
        "visited에 ",
        str_to_int,
        " 추가 되었습니다. 현재 상태: ",
        finished
      );

      // 소수인지 확인한다.
      if (isPrime(str_to_int)) {
        console.log(str_to_int, "은 소수입니다.");
        if (!prime.includes(str_to_int)) {
          answer++;
          prime.push(str_to_int);
        }
        console.log("현재 prime: ", prime);
      }
    }

    primeDFS(combine, idx - 1);
    primeDFS(combine, idx + 1);
  }

  for (let i = 0; i < number.length; i++) {
    if (i == 0 && number[0] == "0") continue;
    visited = Array.from({ length: number.length }, () => false);
    set = 0;
    primeDFS(str, i);
  }

  return answer;
}
