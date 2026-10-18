/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  // const numToLastIndex = new Map();

  // for (let i = 0; i < nums.length; i++) {
  //   if (numToLastIndex.has(nums[i])) {
  //     const difference = i - numToLastIndex.get(nums[i]);
  //     if (difference <= k) return true;
  //   }
  //   numToLastIndex.set(nums[i], i);
  // }

  // return false;

  // ===============================================================
  // O(min(n,k))

  if (k === 0) return false;

  const numsWindow = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numsWindow.has(nums[i])) return true;

    if (numsWindow.size === k) {
      numsWindow.delete(nums[i - k]);
    }

    numsWindow.add(nums[i]);
  }

  return false;

  // ===============================================================
};

const nums = [1, 2, 3, 1];
const k = 3;

console.log(containsNearbyDuplicate(nums, k));
