---
title: Is Complete Binary Tree
date: "2023-12-24"
tags:
  - trees
---

```python
def isCompleteBST(root):
    if not root: return True
    q = []
    q.append(root)
    flag = False
    while q:
        node = q.pop(0)
        if node:
            if flag: return False
            q.append(node.left)
            q.append(node.right)
        else:
            flag = True
    return True
```
