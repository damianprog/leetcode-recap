var containsDuplicate = function (nums, k) {
  //   for (let i = 0; i < nums.length; i++) {
  //     let j = i + 1;
  //     while (j <= i + k && j < nums.length) {
  //       if (nums[i] === nums[j]) return true;
  //       j++;
  //     }
  //   }

  //   return false;

  // ==============================================================
  // Czas O(n) pamięć O(n)

  //   const map = new Map();

  //   for (let i = 0; i < nums.length; i++) {
  //     if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
  //       return true;
  //     }

  //     map.set(nums[i], i);
  //   }

  //   return false;

  // ==============================================================
  // Set Sliding Window
  const window = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) return true;

    window.add(nums[i]);

    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;

  // ==============================================================
};
