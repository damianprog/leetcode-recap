/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // const occurences = {};

  // for (const num of nums) {
  //   occurences[num] = occurences[num] ? occurences[num] + 1 : 1;
  //   if (occurences[num] > nums.length / 2) return num;
  // }

  // ======================================================================
  // Pamięć O(1)

  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;

  /*
Gdy count spadnie do zera, oznacza to:

aktualny kandydat i jakaś grupa innych elementów wzajemnie się zniosły,
ten fragment nie daje już przewagi nikomu.

Więc można go mentalnie wyrzucić i patrzeć tylko na dalszą część tablicy.

A ponieważ prawdziwy majority element ma przewagę w całej tablicy, 
to nie zginie przez takie lokalne zerowania. 
On gdzieś później znowu wypłynie jako kandydat i ostatecznie przetrwa.
  */

  // ======================================================================
};

const nums = [3, 2, 3];

console.log(majorityElement(nums));
