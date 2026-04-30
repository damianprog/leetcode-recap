/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let xorSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    xorSum = xorSum ^ nums[i];
  }

  return xorSum;
};

// const nums = [2, 2, 1];
const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
