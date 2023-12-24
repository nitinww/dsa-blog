---
title: Session 05
date: "2023-05-03"
---

<!-- %% 03/05/2023 %% -->

#### xor of sum of pairs

```
int fun(int arr[], int N) {
	int ans = 0;
	for (int i = 0; i < N; i++) {
		ans ^= arr[i];
	}
	return ans * 2;
}
```

#### sum of xor of pairs

```
int fun(int arr[], int N) {
	int ans = 0;
	for (int bit = 0; bit < 32; bit++) {
		int zeroes = 0, ones = 0;
		for (int i = 0; i < N; i++) {
			if (arr[i] & 1) ones++;
			else zeroes++;
			arr[i] >>= 1;
		}
		ans += (1 << i) * ones * zeroes
	}
	return ans * 2;
}
```

#### recursion

- it's a programming paradigm where we solve a given problem by solving the smaller instances of the exact same problem
- steps:
  1.  assumption
  2.  base case
  3.  main logic

```
int sum(int N) {
	if (N == 0) {
		return 0;
	}
	return N + sum(N - 1);
}
```

```
int fac(int N) {
	if (N == 0 || N == 1) {
		return 1;
	}
	return N + fac(N - 1);
}
```

```
int fib(int N) {
	if (N == 0 || N == 1) {
		return N;
	}
	return fib(N - 1) + fib(N - 2);
}
```

```
int apSum(int a, int n, ind d) {
	if (n == 0) {
		return a;
	}
	return a + (n - 1) * d + apSum(a, n - 1, d);
}
```

```
int apSum(int a, int n, int d) {
	if (n == 1) return a;
	if (n == 0) return 0;
	return a + apSum(a + d, n - 1, d);
}
```

```
int power(int a, int n) {
	int (n == 0) return 1;
	return a * power(a, n - 1);
}
```

```
int power(int a, int n) {
	if (n == 0) return 1;
	if (n % 2 == 0) return power(a, n / 2) * power(a, n / 2);
	else return a * power(a, n / 2) * power(a, n / 2);
}
```

```
int power(int a, int n) {
	int x = power(a, n / 2);
	if (n == 0) return 1;
	if (n % 2 == 0) return (x * x) % MOD;
	else return (a * x * x) % MOD;
}
```
