var reverse = function (s) {
  const chars = Array.from(s);
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let i = 0;
  let j = chars.length - 1;

  while (i < j) {
    const iOnVowel = vowels.has(chars[i].toLowerCase());
    const jOnVowel = vowels.has(chars[j].toLowerCase());

    if (iOnVowel && jOnVowel) {
      [chars[i], chars[j]] = [chars[j], chars[i]];
      i++;
      j--;
    } else {
      if (!iOnVowel) i++;
      if (!jOnVowel) j--;
    }
  }

  return chars.join("");
};
