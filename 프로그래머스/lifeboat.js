function solution(people, limit) {
  var answer = 0;
  var min = 0;
  var max = 0;
  var boat = 0;

  people.sort((a, b) => b - a);
  console.log(people);

  for (let j = 0; j < people.length; j++) {
    // console.log(j)
    max = people[j];
    min = people.at(-1);
    boat = min + max;

    // console.log(max, min, boat)

    if (boat > limit) {
      answer++;
    } else {
      answer++;
      people.pop();
    }
  }

  return answer;
}
