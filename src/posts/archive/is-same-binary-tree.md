---
title: Is Same Binary Tree
date: "2023-12-24"
tags:
  - trees
---

```python
def isSameTree():
	if not p and not q: return True
		if not p or not q: return False
		return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right) and p.val == q.val
```
