---
title: Level Order Traversal
date: "2023-12-24"
tags:
  - trees
  - traversals
---

```python
def levelOrder(root):
    if not root: return True
    q = []
    q.append(root)
    res = []

    while q:
        temp = []
        for _ in range(len(q)):
            node = q.pop(0)
            temp.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)

        res.append(temp)
	return res
```
