var reverse = function (s) {
  const words = [];
  let currentWord = "";

  for (const char of s) {
    if (char === " " && currentWord !== "") {
      words.push(currentWord);
      currentWord = "";
    } else if (char !== " ") {
      currentWord += char;
    }
  }

  if (currentWord !== "") words.push(currentWord);

  return words.reverse().join(" ");

  // return s.trim().split(/\s+/).reverse().join(" ");
};
