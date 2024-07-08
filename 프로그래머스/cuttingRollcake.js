function solution(topping) {
  var answer = 0;
  let toppings = 0;
  let myCake = new Map();
  let brotherCake = new Set();

  for (let i = 0; i < topping.length; i++) {
    let nowTopping = topping[i];
    if (myCake.has(nowTopping)) {
      myCake.set(nowTopping, myCake.get(nowTopping) + 1);
    } else {
      myCake.set(nowTopping, 1);
      toppings++;
    }
  }

  for (let i = 0; i < topping.length; i++) {
    let nowTopping = topping[i];
    brotherCake.add(nowTopping);
    myCake.set(nowTopping, myCake.get(nowTopping) - 1);
    if (myCake.get(nowTopping) == 0) toppings--;
    if (toppings == brotherCake.size) answer++;
  }

  return answer;
}
