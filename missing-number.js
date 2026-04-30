var missingNumber = function (nums) {
  const nSum = (nums.length * (nums.length + 1)) / 2;

  const numbersSum = nums.reduce((acc, currentValue) => acc + currentValue);

  return nSum - numbersSum;
};
