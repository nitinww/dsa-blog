---
title: Is Full Binary Tree
date: "2023-12-24"
tags:
  - trees
---

```python
def isFullBST(root):
    if not root: return True
    if (root.left and not root.right) or (root.right and not root.left): return False
    return isFullBST(root.left) and isFullBST(root.right)
```
