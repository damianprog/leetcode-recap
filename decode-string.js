var decode = function (s) {
  // const numStack = [];
  // const strStack = [];
  // let currStr = "";
  // let currNum = 0;

  // for (const char of s) {
  //   if (char >= "0" && char <= "9") {
  //     currNum = currNum * 10 + Number(char);
  //   } else if (char === "[") {
  //     numStack.push(currNum);
  //     strStack.push(currStr);
  //     currNum = 0;
  //     currStr = "";
  //   } else if (char === "]") {
  //     const k = numStack.pop();
  //     const prevStr = strStack.pop();
  //     currStr = prevStr + currStr.repeat(k);
  //   } else {
  //     currStr += char;
  //   }
  // }

  // return currStr;

  let i = 0;

  const decode = () => {
    let result = "";
    let num = 0;

    while (i < s.length && s[i] !== "]") {
      const ch = s[i];
      if (ch >= "0" && ch <= "9") {
        num = num * 10 + Number(ch);
        i++;
      } else if (ch === "[") {
        i++;
        const inner = decode();
        result += inner.repeat(num);
        num = 0;
        i++;
      } else {
        result += ch;
        i++;
      }
    }

    return result;
  };

  return decode();
};
