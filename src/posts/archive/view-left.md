---
title: Left View
date: "2023-12-24"
tags:
  - trees
  - views
---

```python
def leftView(root):
    if not root: return True
    q = []
    ans = []
    q.append(root)

    while q:
        flag = True
        for i in range(len(q)):
            node = q.pop(0)
            if i == 0: ans.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)

    print(*ans)
```
