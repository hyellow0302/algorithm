function timeCalculator(now, prev) {
  let [nowHour, nowMinute] = now.split(":");
  let [prevHour, prevMinute] = prev.split(":");
  let hour,
    minute = 0;
  let sortIdx = [];
  // console.log(nowHour, nowMinute, prevHour, prevMinute)

  hour = nowHour - prevHour;
  minute = nowMinute - prevMinute;
  // console.log("///////", nowHour - prevHour)

  minute += hour * 60;

  console.log("minute = ", minute);
  return minute;
}

function moneyCalulator(fees, m) {
  let [basic, basicMoney, over, overMoney] = fees;
  // console.log(m, basic, basicMoney, over, overMoney)
  // console.log(m-basic)
  // console.log(Math.ceil((m-basic)/over)*overMoney)
  // console.log(basicMoney + ((Math.ceil((m-basic)/over))*overMoney))
  if (m < basic) return basicMoney;
  m = basicMoney + Math.ceil((m - basic) / over) * overMoney;
  // console.log("최종금액은 ", m)
  return m;
}

function solution(fees, records) {
  var answer = [];
  var todayParking = {};
  var parkingSys = [];
  let time,
    number,
    status = "";
  let minute = 0;

  for (let i = 0; i < records.length; i++) {
    [time, number, status] = records[i].split(" ");
    console.log(time, number, status);

    if (status == "IN") {
      parkingSys.push(number, time);
      // 오늘 처음 주차한 거라면
      if (!(number in todayParking)) {
        todayParking[number] = 0;
      }
    } else if (status == "OUT") {
      let idx = parkingSys.indexOf(number);
      let minute = timeCalculator(time, parkingSys[idx + 1]);
      let money = todayParking[number];

      money += minute;
      todayParking[number] = money;
      console.log(money, todayParking);

      //그리고 지우는 연산
      parkingSys.splice(idx, 2);
    }
  }

  console.log(parkingSys);

  if (parkingSys.length != 0) {
    while (parkingSys.length != 0) {
      let finNumber = parkingSys.shift();
      let finTime = parkingSys.shift();
      let finMinute = timeCalculator("23:59", finTime);
      let money = todayParking[finNumber];

      money += finMinute;
      todayParking[finNumber] = money;
      console.log(money, todayParking);
    }
  }

  sortIdx = Object.keys(todayParking).sort();
  for (let j = 0; j < sortIdx.length; j++) {
    minute = todayParking[sortIdx[j]];
    console.log("dddd", minute);
    answer.push(moneyCalulator(fees, minute));
  }
  console.log(todayParking);

  return answer;
}
