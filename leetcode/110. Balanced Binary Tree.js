function isBalanced(root) {
  if (!root) return true;

  function getDepth(node, depth) {
    if (!node) return depth; // 하위 노드 없으면 계산된 깊이 리턴
    const ld = getDepth(node.left, depth + 1);
    const rd = getDepth(node.right, depth + 1);
    if (Math.abs(ld - rd) > 1) return -1; // 좌우 노드 깊이 균형이 1 초과시 false 조건 리턴
    return Math.max(ld, rd); // 노드 깊이 리턴
  }

  return getDepth(root, 0) !== -1;
}
