---
title: Inorder Traversal
date: "2023-12-24"
tags:
  - trees
  - traversals
---

#### recursive

```python
def inorder(root):
    if not root: return
    inorder(root.left)
    print(root.val, end=" ")
    inorder(root.right)
```

#### iterative

```python

```
