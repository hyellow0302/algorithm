function solution(friends, gifts) {
  var answer = 0;
  var info = [];
  var visited = [];

  for (let i = 0; i < friends.length; i++) {
    info.push(friends[i], { total: 0, gift: 0 });
    for (let j = 0; j < friends.length; j++) {
      // console.log(info[i*2+1])
      info[i * 2 + 1][friends[j]] = 0;
    }
    //console.log(info)
  }
  // console.log("info가 초기화되었습니다: ", info)

  for (let t = 0; t < gifts.length; t++) {
    let [give, recieve] = gifts[t].split(" ");
    // console.log("준 사람: ", give, "받은 사람: ", recieve)

    // 받은 선물 연산
    let recieveIdx = info.indexOf(recieve);
    info[recieveIdx + 1].total -= 1;
    info[recieveIdx + 1][give] += 1;

    // 준 선물 연산
    let giveIdx = info.indexOf(give);
    info[giveIdx + 1].total += 1;
    info[giveIdx + 1][recieve] -= 1;
    // console.log(info)
  }

  for (let k = 0; k < friends.length; k++) {
    let person = friends[k];
    let personIdx = info.indexOf(person);
    let personRecord = info[personIdx + 1];
    visited.push(person);
    for (let l = 0; l < friends.length; l++) {
      let other = friends[l];
      let otherIdx = info.indexOf(other);
      let otherRecord = info[otherIdx + 1];

      if (other == person || visited.includes(other)) continue;

      // console.log("분석중인 대상: ", person , " 비교대상: ", other)

      if (personRecord[other] > otherRecord[person]) {
        otherRecord.gift += 1;
        // console.log(person,"이 더 많이 받았네요 ",other,"에게 선물을 줍시다!")
      } else if (personRecord[other] < otherRecord[person]) {
        personRecord.gift += 1;
        // console.log(other,"이 더 많이 받았네요 ",person,"에게 선물을 줍시다!")
      } else if (personRecord[other] == otherRecord[person]) {
        // console.log(other, person, "둘은 주고받지않았거나, 서로 주고받은 개수가 같습니다.")
        if (personRecord.total < otherRecord.total) {
          otherRecord.gift += 1;
          // console.log(person, "이 지수가 더 높으니까 ", other, "에게 선물을 줍니다.")
        } else if (personRecord.total > otherRecord.total) {
          //console.log(other, "이 지수가 더 높으니까 ", person, "에게 선물을 줍니다.")
          personRecord.gift += 1;
        }
        // else{console.log("본인이거나 지수마저 똑같네요 .. 넘어갑니다.")}
      }
    }
  }

  // console.log(info)
  for (let n = 0; n < info.length / 2; n++) {
    let max = info[n * 2 + 1].gift;
    if (answer < max) answer = max;
    // console.log(max, answer)
  }

  return answer;
}
