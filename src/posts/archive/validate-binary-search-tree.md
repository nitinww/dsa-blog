---
title: Validate Binary Search Tree
date: "2023-12-24"
tags:
  - trees
---

```python
def isBST(root, m=float("-inf"), M=float("inf")):
    if not root: return True
    if not m <= root.val <= M: return False
    return isBST(root.left, m, root.val - 1) and isBST(root.right, root.val + 1, M)
```
