function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   if (!head || !head.next) return false;

//   let slow = head;
//   let fast = head.next.next;

//   while (fast && fast.next) {
//     if (slow === fast) return true;

//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   return false;
// };

// =============================================================
// Lekko poprawiona wersja
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};
