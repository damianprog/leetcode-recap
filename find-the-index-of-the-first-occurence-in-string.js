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
  // const n = haystack.length,
  //   m = needle.length;
  // for (let i = 0; i <= n - m; i++) {
  //   let k = 0;
  //   while (k < m && haystack[i + k] === needle[k]) k++;
  //   if (k === m) return i;
  // }
  // return -1;
  // ==================================================================================
  // Knuth-Morris-Pratt (KMP) Algorithm. Time: O(n + m), Memory: O(m)

  function buildLPS(p) {
    const m = p.length;
    const lps = new Array(m).fill(0);
    let len = 0; // długość aktualnego najdłuższego prefix=suffix
    let i = 1; // lps[0] zawsze 0
    while (i < m) {
      if (p[i] === p[len]) {
        len++;
        lps[i] = len;
        i++;
      } else if (len > 0) {
        len = lps[len - 1]; // cofnij się w needle, NIE w lps[i]
      } else {
        lps[i] = 0;
        i++;
      }
    }
    return lps;
  }

  const strStr = function (haystack, needle) {
    const n = haystack.length,
      m = needle.length;
    if (m === 0) return 0;
    const lps = buildLPS(needle);
    let i = 0; // wskaźnik w haystack — NIGDY się nie cofa
    let j = 0; // wskaźnik w needle
    while (i < n) {
      if (haystack[i] === needle[j]) {
        i++;
        j++;
        if (j === m) return i - j;
      } else if (j > 0) {
        j = lps[j - 1]; // przeskok zamiast restartu od i+1
      } else {
        i++;
      }
    }
    return -1;
  };
};
