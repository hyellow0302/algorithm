function solution(elements) {
  var answer = [];

  for (let i = 0; i < elements.length; i++) {
    if (i == 0) {
      answer = [...answer, ...elements];
      continue;
    }

    let sliceArr = [...elements, ...elements.slice(0, i)];

    for (let j = 0; j < elements.length; j++) {
      let sum = 0;
      for (let k = 0; k < i + 1; k++) {
        sum += sliceArr[j + k];
      }
      answer.push(sum);
    }
  }

  let set = new Set(answer);

  return set.size;
}
