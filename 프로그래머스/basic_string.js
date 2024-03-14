function solution(s) {
  let answer = true;
  let arr = s.split("");

  if (arr.length != 4 && arr.length != 6) return (answer = false);
  for (let i = 0; i < arr.length; i++)
    if (arr[i].charCodeAt() < 48 || arr[i].charCodeAt() > 57)
      return (answer = false);

  return answer;
}
