/**
 * @param {string} s
 * @return {boolean}
 */
// const isPalindrome = function (s) {
//   let clean = s.replace(/[^a-zA-Z0-9]/g, "");

//   let cleanLowerCased = clean.toLowerCase();

//   let head = 0;
//   let tail = cleanLowerCased.length - 1;

//   while (head < tail) {
//     if (cleanLowerCased[head] !== cleanLowerCased[tail]) {
//       return false;
//     }

//     head++;
//     tail--;
//   }

//   return true;
// };

const isAlnum = (c) =>
  (c >= "0" && c <= "9") || (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");

const isPalindrome = function (s) {
  let head = 0;
  let tail = s.length - 1;

  while (head < tail) {
    while (head < tail && !isAlnum(s[head])) head++;
    while (head < tail && !isAlnum(s[tail])) tail--;

    if (s[head].toLowerCase() !== s[tail].toLowerCase()) return false;

    head++;
    tail--;
  }

  return true;
};
