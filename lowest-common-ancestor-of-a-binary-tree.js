var lca = function (root, p, q) {
  if (root === null || root === p || root === q) return root;

  const left = lca(root.left, p, q);
  const right = lca(root.right, p, q);

  if (left && right) return root;
  return left || right;
};
