/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  //   for (let i = 0; i <= haystack.length - needle.length; i++) {
  //     let j = i;
  //     while (haystack[j] === needle[j - i]) {
  //       if (j - i === needle.length - 1) return i;
  //       j++;
  //     }
  //   }

  //   return -1;

  // ==================================================================================
  // Wersja trochę bardziej czytelna ale nadal O(n*m)

  const n = haystack.length,
    m = needle.length;
  for (let i = 0; i <= n - m; i++) {
    let k = 0;
    while (k < m && haystack[i + k] === needle[k]) k++;
    if (k === m) return i;
  }
  return -1;

  // ==================================================================================
};
