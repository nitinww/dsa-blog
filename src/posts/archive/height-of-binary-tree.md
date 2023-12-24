---
title: Height of Binary Tree
date: "2023-12-24"
tags:
  - trees
---

```python
def height(root):
    if not root: return 0
    return 1 + max(height(root.left), height(root.right))
```
