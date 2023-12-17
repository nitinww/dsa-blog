---
title: Session 03
date: "2023-04-19"
---

<!-- %% 19/04/2023 %% -->

### modulo arithmetic

1. addition - (a + b) % M = ((a % M) + (b % M)) % M
2. multiplication - (a _ b) % M = ((a % M) _ (b % M)) % M
3. subtraction - (a - b) % M = ((a % M) - (b % M) - M) % M
4. division - ((a % M) \* ($b^{-1}$ % M)) % M

- extended euclid's algorithm
- format's little theorem - special case when M is prime

#### power

```cpp
long power(int a, int N) {
	long MOD = (long)1e9 + 7;
	for (int i = 0; i < N; i++) {
		ans = (ans % MOD * a % MOD) % MOD;
	}
	return ans;
}
```

((((a % MOD) _ (a % MOD)) _ (a % MOD)) % MOD \* (a % MOD)) % MOD

#### give N count & return no. of divisors of N

```cpp
int divisors(int N) {
	int count = 0;
	for (int i = 1; i < sqrt(N) + 1; i++) {
		if (N % i == 0) {
			count++;
		}
	}
	if (sqrt(n) == int(sqrt(n))) count -= 1;
	cout << count * 2;
}
```

#### time complexity and space complexity
