function isBalanced(root) {
  if (!root) return true;

  function getDepth(node, depth) {
    if (!node) return depth;
    const ld = getDepth(node.left, depth + 1);
    const rd = getDepth(node.right, depth + 1);
    if (Math.abs(ld - rd) > 1) return -1;
    return Math.max(ld, rd);
  }

  return getDepth(root, 0) !== -1;
}
