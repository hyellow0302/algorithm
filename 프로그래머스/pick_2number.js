function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let num1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let num2 = numbers[j];
      let sum = num1 + num2;
      if (!answer.includes(sum)) answer.push(sum);
    }
  }

  return answer.sort((a, b) => a - b);
}
