var longestZizZag = function (root) {
  let longest = 0;

  const dfs = (node) => {
    if (!node) return [-1, -1];

    const [, rightFromLeft] = dfs(node.left);
    const [leftFromRight] = dfs(node.right);

    const L = rightFromLeft + 1;
    const R = leftFromRight + 1;

    longest = Math.max(longest, L, R);

    return [L, R];
  };

  dfs(root);

  return longest;
};
