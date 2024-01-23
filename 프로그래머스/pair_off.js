function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    if (stack.length == 0 || stack[stack.length - 1] != s[i]) {
      stack.push(s[i]);
      // console.log(stack);
    } else {
      stack.pop();
      // console.log(stack);
    }
  }

  return stack.length ? 0 : 1;
}
