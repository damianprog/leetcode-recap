/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] !== val) {
      left++;
    } else if (nums[right] === val) {
      right--;
    } else {
      nums[left] = nums[right];
      nums[right] = val;
    }
  }

  return left;
};
