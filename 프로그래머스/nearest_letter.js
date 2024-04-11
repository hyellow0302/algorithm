function solution(s) {
  var answer = [-1];

  for (let i = 1; i < s.length; i++) {
    let str = s[i];
    for (let j = i - 1; j >= 0; j--) {
      if (str == s[j]) {
        answer.push(i - j);
        break;
      }
    }
    if (answer.length != i + 1) answer.push(-1);
  }

  return answer;
}

// /* 해시를 이용하는 방법 */
// function solution(s) {
//   const hash = {};

//   return [...s].map((v, i) => {
//     let result = hash[v] !== undefined ? i - hash[v] : -1;
//     hash[v] = i;
//     return result;
//   });
// }
