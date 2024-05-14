function solution(s) {
  var answer = [];
  let listN = s.split("{");
  let number = [];
  let idx = 1;

  for (let i = 0; i < listN.length; i++) {
    if (listN[i] == "") continue;
    if (
      listN[i][listN[i].length - 1] == "}" ||
      listN[i][listN[i].length - 1] == ","
    )
      listN[i] = listN[i].slice(0, listN[i].length - 2);
    number.push(listN[i].split(","));
  }

  listN = Array.from(number.length).fill("0");

  for (let j = 0; j < number.length; j++) {
    listN[number[j].length - 1] = number[j];
  }

  number = [];

  listN.forEach((arr) => {
    arr.forEach((n) => {
      number.push(parseInt(n));
    });
  });

  return Array.from(new Set(number));
}
