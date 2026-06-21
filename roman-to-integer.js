/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  //   const romanToInt = {
  //     I: 1,
  //     V: 5,
  //     X: 10,
  //     L: 50,
  //     C: 100,
  //     D: 500,
  //     M: 1000,
  //   };
  //   let total = romanToInt[s[s.length - 1]];
  //   for (let i = s.length - 2; i >= 0; i--) {
  //     if (romanToInt[s[i]] < romanToInt[s[i + 1]]) {
  //       total -= romanToInt[s[i]];
  //     } else {
  //       total += romanToInt[s[i]];
  //     }
  //   }
  //   return total;

  // ===========================================================================

  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const curr = values[s[i]];
    if (curr < prev) total -= curr;
    else total += curr;
    prev = curr;
  }

  return total;

  /*

    Co zyskujesz:

    każdy znak czytany z mapy dokładnie raz (zero podwójnych lookupów),
    brak s[i+1] — żadnego indeksowania sąsiada,
    brak specjalnej inicjalizacji ostatniego elementu — pętla obejmuje cały string jednolicie. prev = 0 na starcie sprawia, że najbardziej prawy znak zawsze trafia do else (dodaj), co jest poprawne.

    Logika identyczna, mniej ruchomych części.

  */

  // ===========================================================================
};
