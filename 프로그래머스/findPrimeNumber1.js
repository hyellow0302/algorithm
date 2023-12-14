function isPrime(n) {
  if (n === 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  var answer = 0;
  var visited = [];
  var number = [];

  number = numbers.split("");
  // console.log(number)

  function primeDFS(num, idx) {
    console.log(num, idx);
    if (visited.includes(num)) return;

    visited.push(num);
    if (isPrime(num)) {
      console.log(num, "은 소수입니다.");
    }

    if (idx + 1 < number.length) {
      let nextNum = num + number[idx + 1];
      primeDFS(number[idx + 1], idx + 1);
      primeDFS(nextNum, idx + 1);
    } else if (idx - 1 >= 0) {
      let prevNum = num + number[idx - 1];
      primeDFS(number[idx - 1], idx - 1);
      primeDFS(prevNum, idx - 1);
    }
  }

  for (let i = 0; i < number.length; i++) {
    if (i == 0 && visited[0] == "0") continue;
    primeDFS(visited[i], i);
  }

  return answer;
}
