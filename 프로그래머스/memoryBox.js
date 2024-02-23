function solution(name, yearning, photo) {
  var answer = [];
  let memory = {};

  name.forEach((friends, idx) => {
    memory[friends] = yearning[idx];
  });
  // console.log(memory)
  // console.log(memory.ran) // undefined

  for (let i = 0; i < photo.length; i++) {
    // console.log(photo[i]);
    let sum = 0;
    photo[i].forEach((friends, idx) => {
      // console.log(friends);
      if (memory[friends] != undefined) {
        sum += memory[friends];
      }
    });
    // console.log(sum);
    answer.push(sum);
  }

  return answer;
}
