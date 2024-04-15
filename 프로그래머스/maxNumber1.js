function solution(numbers) {
  var answer = "";
  var changed = false;
  var nextchanged = false;
  var parseValue = 0;
  var nextparseValue = 0;
  numbers.sort((a, b) => a - b);
  numbers.reverse();

  for (var i = 0; i < numbers.length - 1; i++) {
    parseValue = parseInt(numbers[i] / 10);
    nextparseValue = parseInt(numbers[i + 1] / 10);

    if (parseValue == 0) {
      changed = true;
      numbers[i] = numbers[i] + numbers[i] * 10;
      parseValue = parseInt(numbers[i] * 10);
    }

    if (nextparseValue == 0) {
      nextchanged = true;
      numbers[i + 1] = numbers[i + 1] + numbers[i + 1] * 10;
      nextparseValue = parseInt(numbers[i + 1] / 10);
    }

    if (parseValue == nextparseValue && numbers[i] % 10 < numbers[i + 1] % 10) {
      if (changed == true) {
        numbers[i] = parseInt(numbers[i] / 10);
        changed = false;
      }
      if (nextchanged == true) {
        numbers[i + 1] = parseInt(numbers[i + 1] / 10);
        nextchanged = false;
      }
      tmp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = tmp;
    } else {
      if (changed == true) {
        numbers[i] = parseInt(numbers[i] / 10);
        changed = false;
      }
      if (nextchanged == true) {
        numbers[i + 1] = parseInt(numbers[i + 1] / 10);
        nextchanged = false;
      }
    }
  }

  answer = numbers.join("");

  return answer;
}
