var maximumDepth = function (root) {
  //   if (!root) return 0;

  //   return Math.max(maximumDepth(root.left), maximumDepth(root.right)) + 1;

  if (!root) return 0;

  const queue = [root];

  let depth = 0;

  while (queue.length) {
    const levelWidth = queue.length;

    for (let i = 0; i < levelWidth; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    depth++;
  }

  return depth;
};
