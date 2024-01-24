function solution(record) {
  var answer = [];
  let log = [];
  let userInfo = {};

  for (let i = 0; i < record.length; i++) {
    let [state, userId, userName] = record[i].split(" ");
    // console.log(state, userId, userName)

    if (state === "Enter") {
      // console.log(userName, "님이 들어왔습니다.")
      userInfo[userId] = userName;
      // console.log(userInfo)
      log.push(userId, "님이 들어왔습니다.");
    }
    if (state === "Change") {
      // console.log(userId, "님이 이름을 ", userName, "으로 바꾸었습니다.")
      userInfo[userId] = userName;
      // console.log(userInfo)
    }
    if (state === "Leave") {
      // console.log(userInfo[userId], "님이 나갔습니다.")
      log.push(userId, "님이 나갔습니다.");
    }
  }

  for (let j = 1; j < log.length + 1; j++) {
    if (j % 2 == 0) continue;
    // console.log(userInfo[log[j-1]]+log[j])
    answer.push(userInfo[log[j - 1]] + log[j]);
  }

  return answer;
}
