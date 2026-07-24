/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxAmount = 0;

  while (left < right) {
    const lower = Math.min(height[left], height[right]);
    const width = right - left;

    maxAmount = Math.max(lower * width, maxAmount);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxAmount;
};
