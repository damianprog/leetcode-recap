var areStringsClose = function (word1, word2) {
  //   if (word1.length !== word2.length) return false;

  //   const word1Set = new Set(word1);
  //   const word2Set = new Set(word2);

  //   if (word1Set.size !== word2Set.size) return false;

  //   for (const char of word1Set) {
  //     if (!word2Set.has(char)) return false;
  //   }

  //   const word1Map = new Map();
  //   const word2Map = new Map();

  //   for (const char of word1) {
  //     word1Map.set(char, (word1Map.get(char) ?? 0) + 1);
  //   }

  //   for (const char of word2) {
  //     word2Map.set(char, (word2Map.get(char) ?? 0) + 1);
  //   }

  //   const word1MapValues = Array.from(word1Map.values());
  //   const word2MapValues = Array.from(word2Map.values());

  //   word1MapValues.sort((a, b) => a - b);
  //   word2MapValues.sort((a, b) => a - b);

  //   for (let i = 0; i < word1MapValues.length; i++) {
  //     if (word1MapValues[i] !== word2MapValues[i]) return false;
  //   }

  //   return true;

  if (word1.length !== word2.length) return false;

  const count1 = new Map();
  const count2 = new Map();

  for (const c of word1) count1.set(c, (count1.get(c) ?? 0) + 1);
  for (const c of word2) count2.set(c, (count2.get(c) ?? 0) + 1);

  if (count1.size !== count2.size) return false;
  for (const c of count1.keys()) {
    if (!count2.has(c)) return false;
  }

  const freq1 = [...count1.values()].sort((a, b) => a - b);
  const freq2 = [...count2.values()].sort((a, b) => a - b);

  return freq1.every((v, i) => v === freq2[i]);
};

const word1 = "abbzzca";
const word2 = "babzzcz";

console.log(areStringsClose(word1, word2));
