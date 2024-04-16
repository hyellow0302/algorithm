function solution(numbers) {
  var answer = 0;
  let array = numbers.split("");
  let visited = [];

  const isPrime = (number) => {
    if (visited.includes(number)) return false;
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const primeNumber = function (arr, selectNumber, init) {
    let result = [];

    if (init)
      return arr.map((value) => {
        if (isPrime(value)) answer++;
      });
    if (selectNumber == 1) return arr.map((value) => [value]);

    arr.forEach((fixed, idx, origin) => {
      let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      let combinations = primeNumber(rest, selectNumber - 1, false);
      let attached = combinations.map((combination) => {
        if (isPrime(parseInt(fixed + combination))) {
          visited.push(parseInt(fixed + combination));
          answer++;
        }
        return fixed + combination;
      });
      result.push(...attached);
    });
    return result;
  };

  for (let i = 1; i <= array.length; i++) {
    let init = true;
    if (i > 1) init = false;
    primeNumber(array, i, init);
  }

  return answer;
}
