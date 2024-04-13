function solution(nums) {
  let method = 0;
  let pocketmon = new Map();

  nums.forEach((find) => {
    if (pocketmon.has(find)) pocketmon.set(find, pocketmon.get(find) + 1);
    else pocketmon.set(find, 1);
  });

  pocketmon.size > nums.length / 2
    ? (method = nums.length / 2)
    : (method = pocketmon.size);

  return method;
}
