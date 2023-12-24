---
title: Depth Of Binary Tree
date: "2023-12-24"
tags:
  - trees
---

```python
class TreeNode:
    def __init__(self, val, left = None, right = None, depth = 0):
        self.val = val
        self.left = left
        self.right = right

def insertNode(root, val, cnt):
    if root == None:
        print(cnt, end = " ")
        return TreeNode(val, None, None, cnt)
    if root.val < val: root.right = insertNode(root.right, val, cnt + 1)
    else: root.left = insertNode(root.left, val, cnt + 1)
    return root

for _ in range(int(input())):
    n = int(input())
    nums = list(map(int, input().split()))
    head = TreeNode(nums[0])
    print(0, end = " ")
    for i in range(1, n):
        root = insertNode(head, nums[i], 0)
    print()
```
