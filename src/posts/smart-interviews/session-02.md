---
title: Session 02
date: "2023-04-12"
---

<!-- %% 12/04/2023 %% -->

#### Operators

```
- relational - >, <, >=, \<=, \==, !=
- arithmetic - +, -, \*, /, %
- logical - &&, ||, !
- bitwise - &, |, ~, >>, <<, ^
- all bitwise operators are associative and commutative
```

#### check if ith bit is set in N

```cpp
bool checkSetBit(int N, int i) {
	return (((N >> i) % 2) == 1);
	return (((N >> i) & 1) == 1);
	return ((N & (1 << i)) != 0);
	return ((N & (1 << i)) == (1 << i));
}
```

#### count set bits

```cpp
int countSetBits(int N) {
	int cnt = 0;
	while (N) {
		if (N & 1) {
			cnt++;
		}
		N >>= 1;
	}
	return cnt;
}
```

```cpp
int countSetBits(int N) {
	int cnt = 0;
	while (N) {
		N &= (N - 1);
		cnt++;
	}
	return cnt;
}
```

```cpp
int countSetBits(int N) {
	int cnt = 0;
	for (int i = 0; i < 32; i++) {
		if (checkSetBit(N, i)) {
			cnt++;
		}
	}
	return cnt;
}
```

### given x & y, generate number with xth & yth bits set

```cpp
int generate(int x, int y) {
	return ((1 << x) || (1 << y));
}
```

### given x & y, generate a number with x 1's followed by y 0's

```cpp
int generate(int x, int y) {
	return (((1 << (x + y) - 1) - ((1 << y) - 1));
	return (((1 << (x)) - 1) << y)
}
```

```cpp
int res = 0;
for (int i = y; i < x - y; i++) {
	res = res | (1 << i);
}
```
