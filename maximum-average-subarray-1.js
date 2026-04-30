var maxAverage = function (nums, k) {
  //   let right = 0;
  //   let currentSum = 0;

  //   for (; right < k; right++) {
  //     currentSum += nums[right];
  //   }

  //   let maxSum = currentSum;

  //   while (right < nums.length) {
  //     currentSum -= nums[right - k];
  //     currentSum += nums[right];

  //     maxSum = Math.max(maxSum, currentSum);

  //     right++;
  //   }

  //   return maxSum / k;
  // ==================================================================================
  // Wersja czytelniejsza

  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxSum = currentSum;

  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum / k;
  // ==================================================================================
};

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;

console.log(maxAverage(nums, k));
