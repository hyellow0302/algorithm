function solution(name) {
  var answer = 0;
  var alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let up = 0;
  let down = 0;
  let updown = 0;
  let pass = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let nextIndex = i + 1;
    updown = alphabet.indexOf(name[i]);

    up = updown;
    down = alphabet.length - updown;

    if (up >= down) updown = down;
    else updown = up;
    answer += updown;

    while (nextIndex < name.length && name[nextIndex] === "A") nextIndex++;

    pass = Math.min(
      pass,
      i * 2 + name.length - nextIndex,
      i + 2 * (name.length - nextIndex)
    );
  }

  return answer + pass;
}
