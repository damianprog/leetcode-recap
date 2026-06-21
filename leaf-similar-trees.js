const leafSimilarTrees = function (tree1, tree2) {
  const tree1Values = [];
  const tree2Values = [];

  const dfs = (node, values) => {
    if (!node.left && !node.right) {
      values.push(node.val);
      return;
    }

    if (node.left) dfs(node.left, values);
    if (node.right) dfs(node.right, values);
  };

  dfs(tree1, tree1Values);
  dfs(tree2, tree2Values);

  if (tree1Values.length !== tree2Values.length) return false;

  return tree1Values.every((val, index) => val === tree2Values[index]);
};
// ==================================================================================
// Generatory O(1) space

function* leaves(node) {
  if (!node) return;
  if (!node.left && !node.right) {
    yield node.val;
    return;
  }
  yield* leaves(node.left);
  yield* leaves(node.right);
}

const leafSimilarTrees = function (tree1, tree2) {
  const it1 = leaves(tree1);
  const it2 = leaves(tree2);

  while (true) {
    const a = it1.next();
    const b = it2.next();
    if (a.done && b.done) return true; // oba skończone w tym samym momencie
    if (a.done !== b.done) return false; // jedno skończyło się szybciej
    if (a.value !== b.value) return false; // różny liść
  }
};
// ==================================================================================
