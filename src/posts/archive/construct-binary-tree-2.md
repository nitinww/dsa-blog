---
title: Construct Binary Tree from Preorder and Inorder Traversal
date: "2023-12-24"
tags:
  - trees
---

```python
def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    self.pre_idx = 0

    def constructBST(l, h):
        if h < l: return None
        root = TreeNode(preorder[self.pre_idx])
        idx = inorder.index(preorder[self.pre_idx])
        self.pre_idx += 1
        root.left = constructBST(l, idx - 1)
        root.right = constructBST(idx + 1, h)
        return root

    return constructBST(0, len(preorder) - 1)
```
