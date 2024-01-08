function solution(brown, yellow) {
  var answer = [];
  let measure = [];
  let index = 2;
  let sum = brown + yellow;
  let width,
    height = 0;

  while (index <= sum / 2) {
    if (sum % index === 0) measure.push(index);
    index++;
  }
  console.log(measure);

  for (let i = 0; i < measure.length; i++) {
    height = measure[i];
    width = sum / height;
    console.log(width, height);

    height -= 2;
    width -= 2;

    if (height * width === yellow) {
      console.log("찾았습니다. ", height + 2, width + 2);
      answer.push(width + 2, height + 2);
      break;
    }
  }

  return answer;
}
