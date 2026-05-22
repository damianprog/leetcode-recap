/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //   let slow = 0;

  //   for (let fast = 1; fast < nums.length; fast++) {
  //     if (nums[fast] !== nums[fast - 1]) {
  //       slow++;

  //       nums[slow] = nums[fast];
  //     }
  //   }

  //   return slow + 1;

  // ================================================================================
  // Wersja kanoniczna - Inny jest tylko warunek w pętli

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;

  // ================================================================================
};
