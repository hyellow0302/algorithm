function solution(numbers) {
  numbers.sort((a, b) => {
    a = a.toString();
    b = b.toString();
    return parseInt(b + a) - parseInt(a + b);
  });
  return numbers[0] == 0 ? "0" : numbers.join("");
}
