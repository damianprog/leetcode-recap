var uniqueNumberOccurrences = function (arr) {
  const numberOccurrences = new Map();

  for (const number of arr) {
    numberOccurrences.set(number, (numberOccurrences.get(number) || 0) + 1);
  }

  return new Set(numberOccurrences.values()).size === numberOccurrences.size;
};
