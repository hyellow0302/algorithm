function solution(nums) {
  let method = 0;
  let pocketmon = new Set(nums);

  pocketmon.size > nums.length / 2
    ? (method = nums.length / 2)
    : (method = pocketmon.size);

  return method;
}
