function solution(s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) arr[i] = arr[i].charCodeAt();

  arr.sort((a, b) => b - a);

  for (let j = 0; j < arr.length; j++) arr[j] = String.fromCharCode(arr[j]);

  return arr.join("");
}
