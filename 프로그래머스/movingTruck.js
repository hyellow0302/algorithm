function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  var bridge = Array.from({ length: bridge_length }, () => 0);
  var truck = 0;
  var onWeight = 0;

  answer++;
  bridge.shift(); // 0하나 빼기
  onWeight += truck_weights[0];
  bridge.push(truck_weights.shift()); //다리에 하나 올리기

  while (onWeight != 0) {
    answer++;
    onWeight -= bridge.shift();

    if (truck_weights[0] + onWeight <= weight && truck_weights.length > 0) {
      onWeight += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }
  return answer;
}
