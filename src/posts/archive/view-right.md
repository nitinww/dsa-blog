---
title: Right View
date: "2023-12-24"
tags:
  - trees
  - views
---

```python
def rightView(root):
    if not root: return True
    q = []
    ans = []
    q.append(root)

    while q:
        flag = True
        n = len(q)
        for i in range(n):
            node = q.pop(0)
            if i == n - 1: ans.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)

    print(*ans)
```
