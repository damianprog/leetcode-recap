var majorityElement = function (nums) {
  //   let candidate = nums[0];
  //   let candidateCount = 1;

  //   for (let i = 1; i < nums.length; i++) {
  //     candidateCount += nums[i] === candidate ? 1 : -1;
  //     if (candidateCount === 0) {
  //       candidate = nums[i];
  //       candidateCount = 1;
  //     }
  //   }

  //   return candidate;

  // =========================================================================
  // forma klasyczna — wybór kandydata PRZED zliczeniem
  let candidate,
    count = 0;
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }
  // =========================================================================
};
