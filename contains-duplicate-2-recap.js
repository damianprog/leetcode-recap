/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  // const numToIndexes = new Map();

  // for (let i = 0; i < nums.length; i++) {
  //   const numIndexes = numToIndexes.get(nums[i]) ?? [];
  //   if (numIndexes.length === 1) {
  //     const difference = i - numIndexes[0];
  //     if (difference <= k) return true;
  //   } else {
  //     numIndexes.push(i);
  //     numToIndexes.set(nums[i], numIndexes);
  //   }
  // }

  const numToLastIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numToLastIndex.has(nums[i])) {
      const difference = i - numToLastIndex.get(nums[i]);
      if (difference <= k) return true;
    }
    numToLastIndex.set(nums[i], i);
  }

  return false;
};

const nums = [1, 2, 3, 1];
const k = 3;

console.log(containsNearbyDuplicate(nums, k));
