/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) return [i, j];
  //     }
  //   }

  const numToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    const searchedNum = target - nums[i];

    if (numToIndex.has(searchedNum)) {
      return [numToIndex.get(searchedNum), i];
    }

    numToIndex.set(nums[i], i);
  }
};
