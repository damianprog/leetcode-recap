/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  //   for (let i = 0; i <= haystack.length - needle.length; i++) {
  //     let j = i;
  //     while (haystack[j] === needle[j - i]) {
  //       if (j - i === needle.length - 1) return i;
  //       j++;
  //     }
  //   }
  //   return -1;
  // ==================================================================================
  // Wersja trochę bardziej czytelna ale nadal O(n*m)
  // const n = haystack.length,
  //   m = needle.length;
  // for (let i = 0; i <= n - m; i++) {
  //   let k = 0;
  //   while (k < m && haystack[i + k] === needle[k]) k++;
  //   if (k === m) return i;
  // }
  // return -1;
  // ==================================================================================
  // Knuth-Morris-Pratt (KMP) Algorithm. Time: O(n + m), Memory: O(m)

  /*
  Śledząc działanie buildLPS dla needle = c a c a a
jasne jest dla mnie że lps[0] musi być 0 więc zajmujemy się od razu 
komórką z indeksem 1. Jasne jest dla mnie sprawdzenie czy needle[1] === needle[0] 
bo jeśli tak to len dla indeksu wynosił by 1 ale tak nie jest zatem wynosi 0. 
Kolejny sprawdzany indeks to 2. Nie mamy zbudowanej dotychczas żadnej len więc 
sprawdzamy czy needle[2] === needle[0] i jest traf inkrementujemy len i 
wpisujemy go do lps[2] = 1. Następnie sprawdzamy czy kolejny znak w needle 
czyli ten pod indeksem 3 jest równy temu pod indeksem 1 (bo len jest obecnie 1) 
i owszem mamy kolejny traf więc znowu inkrementujemy len do 2 i 
wpisujemy do lps[3] = 2. Następnie sprawdzamy już ostatni indeks 4 
no i żeby len było nowu zwiększone to needle[4] musiało by być równe 
needle[len czyli 2] ale nie jest i teraz sie dzieje coś czego 
nie rozumiem dlaczego tak sie dzieje. Bo owszem kolejnego trafu 
nie ma więc tracimy ciągłość ale to nie znaczy 
że możemy tępo wstawić w lps[4] = 0. 
Musimy zresetować len do 0 owszem ale tuż po tym sprawdzić czy przypadkiem 
nie zaczyna się nowe samopodobieństwo i tak by było gdyby needle[4] === needle[0] 
ale tak nie jest bo needle[4] = a, needle[0] = c. Czyli moje pytanie jest jasne 
dlaczego przy tym ostatnim indeksie nie zrobiliśmy po prostu resetu len = 0 
tylko len = lps[len - 1]? Dokładnie tego nie rozumiem.
Bo len = 0 pomija potencjalne matche które istniały w dłuższym potencjalnym matchu.
ale to dlaczego nie robimy po prostu len--?
*/

  function buildLPS(p) {
    const m = p.length;
    const lps = new Array(m).fill(0);
    let len = 0; // długość aktualnego najdłuższego prefix=suffix
    let i = 1; // lps[0] zawsze 0
    while (i < m) {
      if (p[i] === p[len]) {
        len++;
        lps[i] = len;
        i++;
      } else if (len > 0) {
        len = lps[len - 1]; // cofnij się w needle, NIE w lps[i]
      } else {
        lps[i] = 0;
        i++;
      }
    }
    return lps;
  }

  const strStr = function (haystack, needle) {
    const n = haystack.length,
      m = needle.length;
    if (m === 0) return 0;
    const lps = buildLPS(needle);
    let i = 0; // wskaźnik w haystack — NIGDY się nie cofa
    let j = 0; // wskaźnik w needle
    while (i < n) {
      if (haystack[i] === needle[j]) {
        i++;
        j++;
        if (j === m) return i - j;
      } else if (j > 0) {
        j = lps[j - 1]; // przeskok zamiast restartu od i+1
      } else {
        i++;
      }
    }
    return -1;
  };
};
