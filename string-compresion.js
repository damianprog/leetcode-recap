var compression = function (chars) {
  // let stringEndIndex = 0;
  // let counter = 0;
  // for (let i = 0; i < chars.length; i++) {
  //   counter++;
  //   if (chars[i + 1] !== chars[i]) {
  //     chars[stringEndIndex] = chars[i];
  //     stringEndIndex++;
  //     if (counter > 1) {
  //       const counterString = counter.toString();
  //       const end = stringEndIndex + counterString.length;
  //       let j = 0;
  //       while (stringEndIndex + j < end) {
  //         chars[stringEndIndex + j] = counterString[j];
  //         j++;
  //       }
  //       stringEndIndex = end;
  //     }
  //     counter = 0;
  //   }
  // }
  // return stringEndIndex;
  // =================================================================
  // read write

  let read = 0;
  let write = 0;

  while (read < chars.length) {
    const currentChar = chars[read];
    let count = 0;

    while (read < chars.length && chars[read] === currentChar) {
      read++;
      count++;
    }

    chars[write++] = currentChar;

    if (count > 1) {
      for (const digit of String(count)) {
        chars[write++] = digit;
      }
    }
  }

  return write;

  // =================================================================
};
