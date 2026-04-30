var kSumPairs = function (nums, k) {
  // const numOccurences = new Map();
  // let pairs = 0;

  // for (const num of nums) {
  //   const needed = numOccurences.get(k - num);
  //   if (needed) {
  //     pairs++;
  //     if (needed === 1) {
  //       numOccurences.delete(k - num);
  //     } else {
  //       numOccurences.set(k - num, needed - 1);
  //     }
  //   } else {
  //     numOccurences.set(num, (numOccurences.get(num) || 0) + 1);
  //   }
  // }

  // return pairs;

  // ================================================================================
  // Two-Pointers

  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1,
    pairs = 0;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      pairs++;
      left++;
      right--;
    } else if (sum < k) left++;
    else right--;
  }
  return pairs;

  // ================================================================================
};
