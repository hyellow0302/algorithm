function solution(clothes) {
  var answer = 1;
  let clotheset = new Map();

  clothes.forEach((itemArr) => {
    if (clotheset.has(itemArr[1]))
      clotheset.set(itemArr[1], clotheset.get(itemArr[1]) + 1);
    else clotheset.set(itemArr[1], 1);
  });

  for (let value of clotheset.values()) answer *= value + 1;

  return answer - 1;
}
