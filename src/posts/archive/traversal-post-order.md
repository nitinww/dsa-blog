---
title: Post Order Traversal
date: "2023-12-24"
tags:
  - trees
  - traversals
---

#### recursive

```python
def postorder(root):
    if not root: return
    postorder(root.left)
    postorder(root.right)
    print(root.val, end=" ")
```

#### iterative
