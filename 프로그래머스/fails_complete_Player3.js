function solution(participant, completion) {
  var answer = "";
  let system = new Map();

  participant.forEach((name) => {
    if (system.has(name)) system.set(name, system.get(name) + 1);
    else system.set(name, 1);
  });

  completion.forEach((name) => {
    if (system.has(name)) system.set(name, system.get(name) - 1);
    else answer = name;
  });

  /* 
  for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }
*/

  for (let [name, not_finish] of system) {
    if (not_finish > 0) return name;
  }

  return answer;
}
