var findPivotIndex = function (nums) {
  //   let currentLeftSum = 0;
  //   let leftSumArray = [];
  //   let rightSumArray = new Array(nums.length).fill(0);

  //   for (let i = 0; i < nums.length; i++) {
  //     leftSumArray.push(currentLeftSum);
  //     currentLeftSum += nums[i];
  //   }

  //   let currentRightSum = 0;

  //   for (let i = nums.length - 1; i >= 0; i--) {
  //     rightSumArray[i] = currentRightSum;
  //     currentRightSum += nums[i];
  //   }

  //   for (let i = 0; i < nums.length; i++) {
  //     if (leftSumArray[i] === rightSumArray[i]) {
  //       return i;
  //     }
  //   }

  //   return -1;

  const totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }

  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];

findPivotIndex(nums);
