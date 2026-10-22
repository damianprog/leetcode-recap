/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  if (nums.length === 1) return [`${nums[0]}`];

  let start = nums[0];
  let result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1 || i === nums.length) {
      if (start === nums[i - 1]) {
        result.push(`${nums[i - 1]}`);
      } else {
        result.push(`${start}->${nums[i - 1]}`);
      }

      start = nums[i];
    }
  }

  return result;
};

const nums = [0, 2, 3, 4, 6, 8, 9];

console.log(summaryRanges(nums));
