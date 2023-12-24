---
title: Invert Binary Tree
date: "2023-12-16"
tags:
  - trees
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root: return root
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root

```

<Button link="https://leetcode.com/problems/invert-binary-tree/" />
