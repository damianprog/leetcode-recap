var countGoodNodes = function (root) {
  //   const highestValues = [root.val];
  //   let count = 0;

  //   const dfs = (node) => {
  //     if (!node) return;

  //     let highestValue = highestValues[highestValues.length - 1];

  //     if (node.val >= highestValue) {
  //       count++;
  //       highestValues.push(node.val);
  //       highestValue = node.val;
  //     }

  //     dfs(node.left);
  //     dfs(node.right);

  //     if (node.val === highestValue) {
  //       highestValues.pop();
  //     }
  //   };

  //   dfs(root);

  //   return count;

  const dfs = (node, maxSoFar) => {
    if (!node) return 0;

    const isGood = node.val >= maxSoFar ? 1 : 0;
    const newMax = Math.max(maxSoFar, node.val);

    return isGood + dfs(node.left, newMax) + dfs(node.right, newMax);
  };

  return dfs(root, -Infinity);
};
