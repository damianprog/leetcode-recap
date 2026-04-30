var maxVowelsNumber = function (s, k) {
  //   const vowels = new Set(["a", "e", "i", "o", "u"]);
  const vowels = new Set("aeiou");

  let currentVowels = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) currentVowels++;
  }

  let maxVowels = currentVowels;

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) currentVowels--;
    if (vowels.has(s[i])) currentVowels++;

    maxVowels = Math.max(currentVowels, maxVowels);
    if (maxVowels === k) return k;
  }

  return maxVowels;
};
