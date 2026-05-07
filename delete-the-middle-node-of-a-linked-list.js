/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var deleteMiddleNode = function (head) {
  // if (!head || !head.next) return null;

  // let slow = head;
  // let fast = head;
  // let prevSlow = null;

  // while (fast && fast.next) {
  //   prevSlow = slow;
  //   slow = slow.next;
  //   fast = fast.next.next;
  // }

  // prevSlow.next = slow.next;

  // return head;
  // ===================================================================
  // Wzorzec z dummy ważne zwałaszcza w sytuacji kiedy w zadaniu może być usuwana head

  const dummy = { next: head };
  let slow = dummy;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;
  return dummy.next;

  // ===================================================================
};
