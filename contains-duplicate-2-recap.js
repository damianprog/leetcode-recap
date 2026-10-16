/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const numToIndexes = new Map();

  for (let i = 0; i < nums.length; i++) {
    const numIndexes = numToIndexes.get(nums[i]) ?? [];
    numIndexes.push(i);
    numToIndexes.set(nums[i], numIndexes);
  }

  console.log(numToIndexes);
};

const nums = [1, 2, 3, 1];
const k = 3;

containsNearbyDuplicate(nums, k);
