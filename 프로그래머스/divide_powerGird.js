// 2023년, 풀다가 실패

function solution(idx) {
  let check = [];
  let result = [];
  let arr = [1, 2, 3, 4];
  if (idx == arr.length) {
    console.log(result);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!check[i]) {
      result[idx] = arr[i];
      check[i] = true;
      solution(idx + 1);
      check[i] = false;
    }
  }
}

console.log(solution(0));
