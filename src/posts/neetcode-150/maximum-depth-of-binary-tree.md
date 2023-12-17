---
title: Maximum Depth of Binary Tree
date: "2023-12-16"
categories:
  - trees
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))


```

<Button link="https://leetcode.com/problems/maximum-depth-of-binary-tree/" />
