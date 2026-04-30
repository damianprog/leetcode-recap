var mostWater = function (height) {
  //   let left = 0;
  //   let right = height.length - 1;
  //   let max = 0;

  //   while (left < right) {
  //     let currentCapacity = 0;
  //     if (height[left] < height[right]) {
  //       currentCapacity = height[left] * (right - left);
  //       if (currentCapacity > max) max = currentCapacity;
  //       left++;
  //     } else {
  //       currentCapacity = height[right] * (right - left);
  //       if (currentCapacity > max) max = currentCapacity;
  //       right--;
  //     }
  //   }

  //   return max;

  // =============================================================================
  // Wersja czytelniejsza

  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const area = h * (right - left);
    if (area > max) max = area;

    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;

  // =============================================================================
};
