function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  //   const numbers = [];

  //   const dfs = (node) => {
  //     if (!node) return false;

  //     numbers.push(node.val);
  //     dfs(node.left);
  //     dfs(node.right);
  //   };

  //   dfs(root);

  //   return numbers;

  if (!root) return [];

  const values = [];
  const stack = [root];

  while (stack.length) {
    const currentNode = stack.pop();
    values.push(currentNode.val);

    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }

  return values;
};
