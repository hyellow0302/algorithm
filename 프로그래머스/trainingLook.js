function solution(n, lost, reserve) {
  var answer = 0;
  var borrow = 0;
  var check = [];

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 여분을 가지고있지만 본인 것을 도둑맞아서 남을 빌려줄 여력이 없을 경우를 계산합니다..
  lost.forEach((people, index) => {
    let lost_too = reserve.includes(people);
    let iamNotreserves = reserve.indexOf(people);

    if (lost_too == true) {
      console.log("어라 내것도 뺏겼네...", iamNotreserves);
      check.push(people);
      // lost.splice(index, 1)
      reserve.splice(iamNotreserves, 1);
    }
  });

  lost = lost.filter((item) => !check.includes(item));

  lost.forEach((people) => {
    let prevFriend = people - 1;
    let prevNumber = 0;
    let nextFriend = people + 1;
    let nextNumber = 0;

    if (reserve.includes(prevFriend) == true) {
      console.log("앞 번호 친구가 빌려줄게!");
      prevNumber = reserve.indexOf(prevFriend);
      reserve.splice(prevNumber, 1);
      borrow++;
    } else if (reserve.includes(nextFriend) == true) {
      console.log("뒷 번호 친구가 빌려줄게!");
      nextNumber = reserve.indexOf(nextFriend);
      reserve.splice(nextNumber, 1);
      borrow++;
    }
  });

  answer = n - (lost.length - borrow);

  return answer;
}
