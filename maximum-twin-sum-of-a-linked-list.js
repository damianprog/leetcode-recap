var maxTwinSum = function (head) {
  // const values = [];

  // let current = head;

  // while (current !== null) {
  //   values.push(current.val);
  //   current = current.next;
  // }

  // let maxSum = 0;

  // for (let i = 0; i < values.length; i++) {
  //   maxSum = Math.max(values[i] + values[values.length - 1 - i], maxSum);
  // }

  // return maxSum;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let first = head;
  let second = prev;
  let maxSum = 0;

  while (second !== null) {
    maxSum = Math.max(first.val + second.val, maxSum);
    first = first.next;
    second = second.next;
  }

  return maxSum;
};
