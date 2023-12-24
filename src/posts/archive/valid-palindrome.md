---
title: Valid Palindrome
date: "2023-12-17"
tags:
  - two-pointers
---

<script lang="ts">
  import Button from './button.svelte'
</script>

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        new = ''
        for a in s:
            if a.isalpha() or a.isdigit():
                new += a.lower()
        return (new == new[::-1])
```

<Button link="https://leetcode.com/problems/valid-palindrome/description/" />
