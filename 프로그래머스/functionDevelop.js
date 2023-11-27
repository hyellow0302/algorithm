function solution(progresses, speeds) {
  var distribute = [];

  while (progresses.length != 0) {
    if (progresses[0] >= 100) {
      count = 1;
      for (var i = 1; i < progresses.length; i++) {
        if (progresses[i] >= 100) {
          count++;
        } else break;
      }
      distribute.push(count);
      for (var j = 0; j < count; j++) {
        progresses.shift();
        speeds.shift();
      }
    } else {
      progresses.forEach((element, index) => {
        progresses[index] = element + speeds[index];
      });
    }
  }

  return distribute;
}
