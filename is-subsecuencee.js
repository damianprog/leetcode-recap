// const isSubsecuence = function (s, t) {
//   if (s.length === 0) return true;

//   let sIndex = 0;

//   for (const letter of t) {
//     if (letter === s[sIndex]) {
//       sIndex++;
//       if (sIndex === s.length) return true;
//     }
//   }

//   return false;
// };

// binary search here
// https://www.geeksforgeeks.org/javascript/binary-search-in-javascript/

const makeChecker = function (t) {
  const tCharsMap = new Map();

  for (let i = 0; i < t.length; i++) {
    const charArray = tCharsMap.has(t[i]) ? tCharsMap.get(t[i]) : [];

    charArray.push(i);
    tCharsMap.set(t[i], charArray);
  }

  return function (s) {
    if (s.length === 0) return true;

    let sIndex = 0;

    for (const letter of t) {
      if (letter === s[sIndex]) {
        sIndex++;
        if (sIndex === s.length) return true;
      }
    }

    return false;
  };
};

const t = "bahbgdc";
const s = "abc";

const isSubsecuence = makeChecker(t);
isSubsecuence(s);
