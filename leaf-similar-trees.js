var leafSimilarTrees = function (root1, root2) {
  //   const root1Values = [];
  //   const root2Values = [];

  //   const dfs = (node, values) => {
  //     if (!node.left && !node.right) {
  //       values.push(node.val);
  //       return;
  //     }

  //     if (node.left) dfs(node.left, values);
  //     if (node.right) dfs(node.right, values);
  //   };

  //   dfs(root1, root1Values);
  //   dfs(root2, root2Values);

  //   if (root1Values.length !== root2Values.length) return false;

  //   return root1Values.every((val, index) => val === root2Values[index]);

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

  var leafSimilar = function (root1, root2) {
    const it1 = leaves(root1);
    const it2 = leaves(root2);

    while (true) {
      const a = it1.next();
      const b = it2.next();
      if (a.done && b.done) return true; // oba skończone w tym samym momencie
      if (a.done !== b.done) return false; // jedno skończyło się szybciej
      if (a.value !== b.value) return false; // różny liść
    }
  };

  // ==================================================================================
};
