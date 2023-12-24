---
title: Pre Order Traversal
date: "2023-12-24"
tags:
  - trees
  - traversals
---

#### recursive

```python
def preorder(root):
    if not root: return
    print(root.val, end=" ")
    preorder(root.left)
    preorder(root.right)
```

#### iterative
