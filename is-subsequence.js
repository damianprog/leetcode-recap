// var isSubsequence = function (s, t) {
//   let i = 0;

//   for (const char of t) {
//     if (char === s[i] && ++i === s.length) return true;
//   }

//   return i === s.length;
// };

// =========================================================================================
// s array brute force

// var isSubsequence = function (sArray, t) {
//   const check = (s) => {
//     let i = 0;

//     for (const char of t) {
//       if (char === s[i] && ++i === s.length) return true;
//     }

//     return i === s.length;
//   };

//   for (const s of sArray) {
//     if (check(s)) return true;
//   }

//   return false;
// };

// =========================================================================================

// const getNextIndex = (indexes, currentIndex) => {
//   let left = 0;
//   let right = indexes.length - 1;

//   while (left < right) {
//     let mid = Math.floor(left + right / 2);

//     if (currentIndex > indexes[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   if (indexes[left] < currentIndex && left + 1 > indexes.length - 1) {
//     return -1;
//   }

//   return indexes[left] > currentIndex ? indexes[left] : indexes[left + 1];
// };

// var isSubsequence = function (sArray, t) {
//   const tCharsIndexes = new Map();

//   for (let i = 0; i < t.length; i++) {
//     const charIndexes = tCharsIndexes.get(t[i]);
//     if (charIndexes) charIndexes.push(i);
//     tCharsIndexes.set(t[i], charIndexes ? charIndexes : [i]);
//   }

//   for (const s of sArray) {
//     let currentIndex = -1;
//     for (let i = 0; i < s.length; i++) {
//       const indexes = tCharsIndexes.get(s[i]);
//       if (!indexes) break;
//       const nextCharIndex = getNextIndex(indexes, currentIndex);
//       if (nextCharIndex < currentIndex) break;
//       return true;
//     }
//   }

//   return false;
// };

// =========================================================================================

const getNextIndex = (indexes, currentIndex) => {
  let left = 0;
  let right = indexes.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (indexes[mid] <= currentIndex) left = mid + 1;
    else right = mid;
  }
  return left === indexes.length ? -1 : indexes[left];
};

var isSubsequence = function (sArray, t) {
  const tCharsIndexes = new Map();
  for (let i = 0; i < t.length; i++) {
    if (!tCharsIndexes.has(t[i])) tCharsIndexes.set(t[i], []);
    tCharsIndexes.get(t[i]).push(i);
  }

  for (const s of sArray) {
    let currentIndex = -1;
    let ok = true;
    for (const char of s) {
      const indexes = tCharsIndexes.get(char);
      if (!indexes) {
        ok = false;
        break;
      }
      const next = getNextIndex(indexes, currentIndex);
      if (next === -1) {
        ok = false;
        break;
      }
      currentIndex = next;
    }
    if (ok) return true;
  }
  return false;
};

// =========================================================================================
