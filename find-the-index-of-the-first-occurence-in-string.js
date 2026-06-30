/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = i;
    while (haystack[j] === needle[j - i]) {
      if (j - i === needle.length - 1) return i;
      j++;
    }
  }

  return -1;
};
