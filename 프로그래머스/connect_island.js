function solution(n, costs) {
  let answer = 0;
  let route = Array.from({ length: n }, () => 0);
  let location,
    destination,
    cost = 0;
  let idx = 0;
  console.log(route);

  for (let i = 0; i < costs.length; i++) {
    [location, destination, cost] = costs[i];
    console.log(location, destination, cost);

    if (route[location] == 0 || route[location][1] > cost) {
      console.log("처음 들어오는 location이거나 더 짧은 길이네요");
      route[location] = [destination, cost];

      if (route[destination] == 0 || route[destination][1] > cost) {
        route[destination] = [location, cost];
      }
      console.log(route);
    } else if (route[destination] == 0 || route[destination][1] > cost) {
      console.log(destination, "도 가장 빠른 루트네요");
      route[destination] = [location, cost];
      console.log(route);
    }
  }

  for (let j = 0; j < route.length; j++) {
    console.log("ff", j);
    if (route[j] == 0) continue;

    idx = j;
    [destination, cost] = route[j];

    console.log("idx: ", idx, "ds: ", destination, "cs: ", cost);

    if (route[destination][0] == idx) {
      console.log(
        idx,
        destination,
        " 둘이 같은 루트를 말하고있네요 하나는 지워줍시다."
      );
      route[destination] = 0;
      console.log(route);
    }
    answer += cost;
  }

  return answer;
}

// [[0, 1, 1], [0, 3, 3], [0, 2, 2], [0, 4, 1], [1, 2, 1], [1, 3, 1], [1, 4, 3], [2, 3, 4], [2, 4, 4], [3, 4, 3]]
