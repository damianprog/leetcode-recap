const reverseRange = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
};

const reverse = function (s) {
  // const trimmed = s.trim();
  // const words = [];
  // let currentWord = "";

  // for (const char of trimmed) {
  //   // if (char === " " && currentWord !== "") {
  //   //   words.push(currentWord);
  //   //   currentWord = "";
  //   // } else if (char !== " ") {
  //   //   currentWord += char;
  //   // }

  //   if (char === " ") {
  //     if (currentWord !== "") {
  //       words.push(currentWord);
  //       currentWord = "";
  //     }
  //   } else {
  //     currentWord += char;
  //   }
  // }

  // if (currentWord !== "") words.push(currentWord);

  // return words.reverse().join(" ");

  // =========================================================================
  // Follow-up O(1) extra space z tym że w JS jest to niemożliwe
  // ale jesli by było to by wyglądało tak

  const sArray = s.split("");

  reverseRange(sArray, 0, sArray.length - 1);

  let left = 0;

  for (let right = 0; right < sArray.length - 1; right++) {
    if (sArray[right] === " ") {
      if (left !== right) {
        reverseRange(sArray, left, right - 1);
      }

      left = right + 1;
    }
  }

  if (left < sArray.length) {
    reverseRange(sArray, left, sArray.length - 1);
  }

  return sArray.join("");

  // =========================================================================
};
