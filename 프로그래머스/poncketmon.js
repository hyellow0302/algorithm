function solution(nums) {
  var Pocket = {};
  var maxPocket = nums.length / 2;
  var myPocket = 0;

  for (var i = 0; i < nums.length; i++) {
    setNums = nums[i];
    Pocket[setNums] = i;
  }

  kindPocket = Object.keys(Pocket);

  if (kindPocket.length >= maxPocket) {
    myPocket = maxPocket;
  } else {
    myPocket = kindPocket.length;
  }

  return myPocket;
}
