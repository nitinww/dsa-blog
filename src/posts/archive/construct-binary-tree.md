---
title: Construct Binary Tree from Inorder and Postorder Traversal
date: "2023-12-24"
tags:
  - trees
---

```python
def constructTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
    self.pre_idx = len(postorder) - 1

    def constructBST(l, h):
        if h < l: return None
        root = TreeNode(postorder[self.pre_idx])
        idx = inorder.index(postorder[self.pre_idx])
        self.pre_idx -= 1
        root.right = constructBST(idx + 1, h)
        root.left = constructBST(l, idx - 1)
        return root

    return constructBST(0, len(inorder) - 1)
```
