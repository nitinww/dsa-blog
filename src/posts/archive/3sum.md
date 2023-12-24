---
title: 3Sum
date: "2023-12-17"
tags:
  - two-pointers
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        target = 0
        ans = []
        for i in range(len(nums) - 2):
            if 0 < i and nums[i] == nums[i - 1]: continue
            l, r = i + 1, len(nums) - 1
            while l < r:
                s = nums[l] + nums[r] + nums[i]
                if s == target:
                    ans.append([nums[i], nums[l], nums[r]])
                    while l < r and nums[l] == nums[l + 1]:
                        l += 1
                    while l < r and nums[r] == nums[r - 1]:
                        r -= 1
                    l += 1
                    r -= 1
                elif s < target: l += 1
                else: r -= 1
        return ans

```

<Button link="https://leetcode.com/problems/3sum/description/" />
