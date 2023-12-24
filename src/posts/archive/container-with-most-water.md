---
title: Container With Most Water
date: "2023-12-17"
tags:
  - two-pointers
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        ans = 0
        while l < r:
            ans = max(ans, min(height[l], height[r]) * (r - l))
            if height[l] < height[r]: l += 1
            else: r -= 1
        return ans
```

<Button link="https://leetcode.com/problems/container-with-most-water/description/" />
