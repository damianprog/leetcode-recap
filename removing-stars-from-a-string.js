var removeStars = function (s) {
  let nonStarArray = [];

  for (const char of s) {
    if (char === "*") {
      nonStarArray.pop();
    } else {
      nonStarArray.push(char);
    }
  }

  return nonStarArray.join("");
};
