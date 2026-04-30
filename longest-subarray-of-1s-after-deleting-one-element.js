var longest = function (nums) {
  let left = 0;
  let maxLen = 0;
  let zeroesInWindow = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroesInWindow++;

    while (zeroesInWindow > 1) {
      if (nums[left] === 0) zeroesInWindow--;

      left++;
    }

    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
};
