---
title: Best Time to Buy And Sell Stock
date: "2023-12-16"
categories:
  - sliding-window
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        m, M = prices[0], 0

        for price in prices:
            m = min(m, price)
            M = max(M, price - m)

        return M
```

<Button link="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" />
