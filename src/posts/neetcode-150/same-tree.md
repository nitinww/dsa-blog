---
title: Same Tree
date: "2023-12-16"
categories:
  - trees
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q: return True
        if not p or not q or p.val != q.val: return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```

<Button link="https://leetcode.com/problems/same-tree/description/" />
