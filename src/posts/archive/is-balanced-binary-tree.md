---
title: Is Balanced Binary Tree
date: "2023-12-24"
tags:
  - trees
---

```python
def isBalancedBST(root):
    def dfs(root):
        if not root: return [True, 0]
        left, right = dfs(root.left), dfs(root.right)
        balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1
        return [balanced, 1 + max(left[1], right[1])]

    return dfs(root)[0]
```
