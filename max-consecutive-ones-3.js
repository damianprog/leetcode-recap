var maxConsectuiveOnes = function (nums, k) {
  // let firstFlipIndex = 0;
  // let i = 0;
  // let currentCount = 0;
  // let flipsLeft = k;
  // let maxCount = 0;

  // while (i < nums.length) {
  //   if (nums[i] === 1) {
  //     currentCount++;
  //   } else if (nums[i] === 0 && flipsLeft > 0) {
  //     if (flipsLeft === k) {
  //       firstFlipIndex = i;
  //     }

  //     flipsLeft--;
  //     currentCount++;
  //   } else {
  //     i = firstFlipIndex;
  //     flipsLeft = k;
  //     currentCount = 0;
  //   }

  //   maxCount = Math.max(currentCount, maxCount);

  //   i++;
  // }

  // return maxCount;

  let left = 0;
  let zerosInWindow = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zerosInWindow++;

    while (zerosInWindow > k) {
      if (nums[left] === 0) zerosInWindow--;

      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

console.log(maxConsectuiveOnes(nums, k));
