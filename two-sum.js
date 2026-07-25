/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsIndexes = new Map();

  for (let i = 0; i < nums.length; i++) {
    const wanted = target - nums[i];

    if (numsIndexes.has(wanted)) {
      return [numsIndexes.get(wanted), i];
    } else {
      numsIndexes.set(nums[i], i);
    }
  }
};
