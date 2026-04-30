var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a, b) => {
    while (b !== 0) {
      const reminder = a % b;
      a = b;
      b = reminder;
    }

    return a;
  };

  return str1.substring(0, gcd(str1.length, str2.length));
};
