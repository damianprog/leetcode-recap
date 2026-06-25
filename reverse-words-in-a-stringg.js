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

  let write = 0;

  for (let read = 0; read < sArray.length; read++) {
    const isNotSpace = sArray[read] !== " ";
    const isSpaceButPrevWrittenNot =
      sArray[read] === " " && write > 0 && sArray[write - 1] !== " ";

    if (isNotSpace || isSpaceButPrevWrittenNot) {
      sArray[write] = sArray[read];
      write++;
    }
  }

  const lastValidCharIndex = sArray[write - 1] === " " ? write - 2 : write - 1;

  reverseRange(sArray, 0, lastValidCharIndex);

  let left = 0;

  for (let right = 0; right <= lastValidCharIndex; right++) {
    if (sArray[right] === " ") {
      if (left !== right) {
        reverseRange(sArray, left, right - 1);
      }

      left = right + 1;
    }
  }

  if (left <= lastValidCharIndex) {
    reverseRange(sArray, left, lastValidCharIndex);
  }

  return sArray.slice(0, lastValidCharIndex + 1).join("");

  // =========================================================================
};
