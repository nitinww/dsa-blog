---
title: Vertical Order Traversal
date: "2023-12-24"
tags:
  - trees
  - traversals
---

```python
def verticalOrder(root, level, mp):
    if not root: return
    mp[level].append(root.val)
    verticalOrder(root.left, level - 1, mp)
    verticalOrder(root.right, level + 1, mp)
```
