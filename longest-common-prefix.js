/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  //   let prefix = "";

  //   for (let i = 0; i < strs[0].length; i++) {
  //     for (let j = 1; j < strs.length; j++) {
  //       if (strs[0][i] !== strs[j][i]) return prefix;
  //     }

  //     prefix += strs[0][i];
  //   }

  //   return prefix;

  // ======================================================================
  // Nic nie budujemy

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return strs[0].slice(0, i);
    }
  }
  return strs[0];
};
