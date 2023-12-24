---
title: Diameter of Binary Tree
date: "2023-12-16"
tags:
  - trees
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.ans = 0

        def dfs(root):
            if not root: return 0
            left, right = dfs(root.left), dfs(root.right)

            self.ans = max(self.ans, left + right)
            return 1 + max(left, right)

        dfs(root)
        return self.ans
```

<Button link="https://leetcode.com/problems/diameter-of-binary-tree/description/" />
