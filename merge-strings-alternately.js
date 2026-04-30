var merge = function (word1, word2) {
  let merged = "";

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    merged += `${i < word1.length ? word1[i] : ""}${i < word2.length ? word2[i] : ""}`;
  }

  return merged;
};
