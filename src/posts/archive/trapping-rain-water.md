---
title: Trapping Rain Water
date: "2023-12-17"
tags:
  - two-pointers
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        if n <= 2: return 0
        maxL, maxR = [0] * n , [0] * n
        ans = 0
        maxL[0] = height[0]
        maxR[n - 1] = height[n - 1]

        for i in range(1, n): maxL[i] = max(maxL[i - 1], height[i])
        for i in range(n - 2, -1, -1): maxR[i] = max(maxR[i + 1], height[i])

        for i in range(1, n - 1): ans += max(0, min(maxL[i], maxR[i]) - height[i])

        return ans
```

<Button link="https://leetcode.com/problems/trapping-rain-water/description/" />
