var pathSum3 = function (root, targetSum) {
  const prefixCount = new Map();
  let count = 0;

  prefixCount.set(0, 1);

  const dfs = (node, pathSum) => {
    if (!node) return;

    const newPathSum = pathSum + node.val;

    count += prefixCount.get(newPathSum - targetSum) || 0;

    prefixCount.set(newPathSum, (prefixCount.get(newPathSum) || 0) + 1);

    dfs(node.left, newPathSum);
    dfs(node.right, newPathSum);

    prefixCount.set(newPathSum, prefixCount.get(newPathSum) - 1);
  };

  dfs(root, 0);

  return count;
};
