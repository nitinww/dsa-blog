---
title: Is Symmetric Binary Tree
date: "2023-12-24"
tags:
  - trees
---

```python
def isSymmetric(root):
	def dfs(temp1, temp2):
		if not temp1 and not temp2: return True
		if not temp1 or not temp2: return False
		return dfs(temp1.left, temp2.right) and dfs(temp1.right, temp2.left)

	return dfs(root, root)
```
