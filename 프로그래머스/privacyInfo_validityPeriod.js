function solution(today, terms, privacies) {
  var answer = [];
  var termsList = {};
  var today_year,
    today_month,
    today_day = 0;
  console.log(privacies[0][11]);

  /* 전처리 */
  /* 1. terms는 key-value로 바꿔준다. */
  for (let i = 0; i < terms.length; i++) {
    console.log(terms[i].split(" "));

    key = terms[i].split(" ")[0];
    value = terms[i].split(" ")[1];

    termsList[key] = value;
    console.log(termsList);
  }

  /* 2. today를 year, month, day로 나눠준다. */
  today_year = Number(today.split(".")[0]);
  today_month = Number(today.split(".")[1]);
  today_day = Number(today.split(".")[2]);
  console.log(today_year, today_month, today_day);

  /* privacies lenght만큼 for을 돌면서 유효기간이 지났는지 확인 */
  for (let j = 0; j < privacies.length; j++) {
    // privacies 값도 year, month, day, type 으로 나눠준다.
    let type = privacies[j].split(" ")[1];
    let year = Number(privacies[j].split(" ")[0].split(".")[0]);
    let month = Number(privacies[j].split(" ")[0].split(".")[1]);
    let day = Number(privacies[j].split(" ")[0].split(".")[2]);
    console.log(type, year, month, day);

    // termList와 알파벳을 비교하여 type을 key에서 value값으로 변경
    type = termsList[type];
    console.log(type);

    // 유효기간 구하기
    month += parseInt(type);
    console.log(month);
    if (month > 12) {
      year += parseInt(month / 12);
      month = month % 12;
      if (month == 0) {
        month = 12;
        year -= 1;
      }
    }
    console.log("유효기간은 ", year, month, day, " 입니다.");

    // 오늘과 유효기간 비교하기
    console.log(
      "today: ",
      today_year,
      today_month,
      today_day,
      "유효기간: ",
      year,
      month,
      day
    );
    if (today_year > year) {
      console.log("year 비교해보니 유효기간 안남았네요 ");
      answer.push(j + 1);
      continue;
    } else if (today_year < year) continue;

    if (today_year == year && today_month > month) {
      console.log("year은 똑같은데 month 비교해보니 유효기간 안남았네요 ");
      answer.push(j + 1);
      continue;
    } else if (today_year == year && today_month < month) continue;

    if (today_month == month && today_day >= day) {
      console.log("month은 똑같은데 day 비교해보니 유효기간 안남았네요 ");
      answer.push(j + 1);
      continue;
    } else if (today_month == month && today_day < day) continue;
  }

  return answer;
}
