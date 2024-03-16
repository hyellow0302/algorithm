function solution(n) {
  var answer = 0;
  let threeN = n.toString(3);
  let copyThreeN = threeN.split("");

  for (let i = threeN.length; i > 0; i--)
    copyThreeN[threeN.length - i] = threeN[i - 1];

  return (answer = parseInt(copyThreeN.join(""), 3));
}
