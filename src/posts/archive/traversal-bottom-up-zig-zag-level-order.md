---
title: Bottom Up Zig Zag Level Order Traversal
date: "2023-12-24"
tags:
  - trees
  - traversals
---

```python
def bottomUpZigZagLevelOrder(root):
    if not root: return True
    q = []
    q.append(root)
    ans = []
    rev = False

    while q:
        n = len(q)
        temp = []
        for _ in range(n):
            node = q.pop(0)
            temp.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        rev = not rev
        if rev: temp.reverse()
        ans.append(temp)

    for w in reversed(ans): print(*w, end = " ")
```
