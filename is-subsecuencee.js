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

function upperBound(arr, x) {
  let lo = 0;
  let hi = arr.length - 1;
  let ans = -1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (arr[mid] > x) {
      ans = arr[mid];
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return ans;
}

const makeChecker = function (t) {
  const tCharsMap = new Map();

  for (let i = 0; i < t.length; i++) {
    const list = tCharsMap.get(t[i]);
    if (list) list.push(i);
    else tCharsMap.set(t[i], [i]);
  }

  return function (s) {
    let pos = -1;

    for (const char of s) {
      const indices = tCharsMap.get(char);
      if (indices === undefined) return false;

      const found = upperBound(indices, pos);
      if (found === -1) return false;
      pos = found;
    }

    return true;
  };
};

const t = "bahbgdc";
const s = "abc";

const isSubsecuence = makeChecker(t);
console.log(isSubsecuence(s));
