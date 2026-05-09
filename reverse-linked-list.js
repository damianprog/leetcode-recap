var reverse = function (head) {
  // Intuicja: rekursja schodzi do końca listy, znajduje newHead (ostatni node) i wraca,
  // w drodze powrotnej odwracając każdą parę. head.next.next = head,
  // czyta się jako: "mój następny powinien teraz wskazywać na mnie".
  // if (head === null || head.next === null) return head;

  //   const newHead = reverse(head.next);
  //   head.next.next = head;
  //   head.next = null;

  //   return newHead;
  // =========================================================================
  // Wersja idiomatyczna

  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;

  // =========================================================================
};
