function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  //   const values = [];

  //   const dfs = (node) => {
  //     if (!node) return false;

  //     dfs(node.left);
  //     dfs(node.right);
  //     values.push(node.val);
  //   };

  //   dfs(root);

  //   return values;

  // =======================================================================

  //   if (!root) return [];

  //   const values = [];
  //   const stack = [root];

  //   while (stack.length) {
  //     let currentNode = stack[stack.length - 1];

  //     if (!currentNode.left && !currentNode.right) {
  //       currentNode = stack.pop();
  //       values.push(currentNode.val);
  //     }

  //     if (currentNode.right) {
  //       stack.push(currentNode.right);
  //       currentNode.right = null;
  //     }
  //     if (currentNode.left) {
  //       stack.push(currentNode.left);
  //       currentNode.left = null;
  //     }
  //   }

  //   return values;

  // =======================================================================

  // Wersja iteratywna bez psucia drzewa

  if (!root) return [];

  const values = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    values.push(node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return values.reverse();
};
