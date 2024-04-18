// 테스트케이스 모두 통과.. 채점결과 : 시간 초과 실패
function solution(cap, n, deliveries, pickups) {
  // n- idx
  var answer = 0;
  let deliveriesN = 0;
  let pickupsN = 0;
  deliveries.forEach((number) => (deliveriesN += number));
  pickups.forEach((number) => (pickupsN += number));

  pickups.reverse();
  deliveries.reverse();

  while (deliveriesN + pickupsN != 0) {
    let startBox = deliveriesN < cap ? deliveriesN : cap;
    let endBox = 0;
    let firstDelivery = 100000;

    for (let i = 0; i < n; i++) {
      if (startBox == 0) break;
      if (deliveries[i] > 0) {
        if (firstDelivery > i) {
          firstDelivery = i;
        }
        if (startBox < deliveries[i]) {
          // 박스에 담아온 것 보다 배달할 게 많은 집
          deliveriesN -= startBox;
          deliveries[i] -= startBox;
          startBox = 0;
        } else {
          // 박스가 더 많은 짐
          deliveriesN -= deliveries[i];
          startBox -= deliveries[i];
          deliveries[i] = 0;
        }
      }
    }
    for (let j = 0; j < n; j++) {
      if (endBox == cap) break;
      if (pickups[j] > 0) {
        if (firstDelivery > j) {
          firstDelivery = j;
        }

        if (cap - endBox < deliveries[j]) {
          // 용량보다 수거할 게 더 많은 집
          pickupsN -= cap - endBox;
          pickupsN[j] -= cap - endBox;
          endBox = cap;
        } else {
          // 용량이 더 많은 집
          pickupsN -= pickups[j];
          endBox += pickups[j];
          pickups[j] = 0;
        }
      }
    }
    answer += (n - firstDelivery) * 2;
  }

  return answer;
}
