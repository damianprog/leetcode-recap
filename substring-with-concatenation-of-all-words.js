function findSubstring(s, words) {
  const wordsQuantities = new Map();

  words.forEach((word) => {
    const wordQty = wordsQuantities.get(word);
    wordsQuantities.set(word, (wordQty ?? 0) + 1);
  });

  const permutationLength = words[0].length * words.length;

  const result = [];

  for (let i = 0; i <= s.length - permutationLength; i++) {
    let frag = "";
    const wordsQuantitiesCopy = new Map(wordsQuantities);
    for (let j = 0; j < permutationLength; j++) {
      frag += s[i + j];

      if (frag.length === words[0].length) {
        const wordQty = wordsQuantitiesCopy.get(frag);
        if (wordQty) {
          wordsQuantitiesCopy.set(frag, wordQty - 1);
          frag = "";
        } else {
          break;
        }
      }

      if (j === permutationLength - 1) {
        result.push(i);
      }
    }
  }

  return result;
}

// const s = "barfoothefoobarman";
// const words = ["foo", "bar"];

const s = "wordgoodgoodgoodbestword";
const words = ["word", "good", "best", "word"];

console.log(findSubstring(s, words));
