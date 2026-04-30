var summaryRanges = function (nums) {
  const ranges = [];
  let currentBeginnig = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 || nums[i + 1] !== nums[i] + 1) {
      const range =
        i === currentBeginnig
          ? `${nums[currentBeginnig]}`
          : `${nums[currentBeginnig]}->${nums[i]}`;
      ranges.push(range);

      currentBeginnig = i + 1;
    }
  }

  return ranges;
};
