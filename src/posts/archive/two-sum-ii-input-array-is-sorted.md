---
title: Two Sum II - Input Array Is Sorted
date: "2023-12-17"
tags:
  - two-pointers
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1
        while l < r:
            s = numbers[l] + numbers[r]
            if s == target: return [l + 1, r + 1]
            elif s < target: l += 1
            else: r -= 1
```

<Button link="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/" />
