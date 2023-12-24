---
title: Bottom Up Level Order Traversal
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
    ans = []

    while q:
        n = len(q)
        temp = []
        for _ in range(n):
            node = q.pop(0)
            temp.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        ans.append(temp)

    for w in reversed(ans): print(*w)
```
