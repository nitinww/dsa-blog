---
title: Session 04
date: "2023-04-26"
---

<!-- %% 26/04/2023 %% -->

#### given arr, every element is repeated twice except one

```python
int singleNumber(int arr[], int N) {
	int cnt, ans = 0;
	for (int i = 0; i < N; i++) {
		cnt = 1;
		for (int j = 0; j < N; j++) {
			if (i != j && arr[i] == arr[j]) cnt++;
		}
		if (cnt == 1) {
			ans = arr[i];
			break;
		}
	}
	return ans;
}
```

```python
int singleNumber(int arr[], int N) {
	int ones = 0;
	int twos = 0;
	for (int i = 0; i < N; i++) {
		ones = (ones ^ arr[i]) & (~twos);
		twos = (twos ^ arr[i]) & (~ones);
	}
	return ones;
}
```

#### power

```python
int pow(int a, int N) {
	int ans = 1;
	while (N) {
		if (N & 1) {
			ans = ans * a;
		}
		N >>= 1;
		a = a * a;
	}
	return ans;
}
```

```
int pow(int a, int N) {
	int ans = 1;
	for (int i = 0; i < logN; i++) {
		if (checkSetBit(N, i)) {
			ans = ans * a;
		}
		a *= a;
	}
	return ans;
}
```

#### given arr, every element is repeated thrice except one

```
int func(int arr[], int N) {
	int ans = 0;
	for (int b = 0; b < 32; b++) {
		int c = 0;
		for (int i = 0; i < N; i++) {
			if (checkSetBit(arr[i], b) == 1) {
				c++;
			}
		}
		// ans += ((count % 3) << i);
		if (c % 3 == 1) {
			ans = ans + (1 << b);
		}
	}
	return ans;
}
```

#### given arr, find the repeated element

```
int func(int arr[], int N) {
	int x = 0;
	for (int i = 0; i < n; i++) {
		x ^= arr[i];
		x ^= (i + 1);
	}
	int c = 0; // logx
	while ((x & 1) != 1) {
		c++;
		x >>= 1;
	}
	int a = 0, b = 0;
	for (int i = 0; i < N; i++) {
		if ((c << 1) & arr[i]) {
			a ^= arr[i];
		} else {
			b ^= arr[i];
		}

		if ((c << 1) & (i + 1)) {
			a ^= (i + 1);
		} else {
			b ^= (i + 1);
		}
	}
	cout << a << " " << b << endl;
}
```

#### subset sum using bit manipulation

```
bool solve(int arr[], int N, int K) {
	for (int i = 0; i < (1 << N); i++) {
		int sum = 0, w = i;
		while (w) {
			if (w & 1) {
				sum += arr[w];
			}
			w >>= 1;
		}
		if (sum == K) return true;
	}
	return false;
}
```

```
bool solve(int arr[], int N, int K) {
	for (int i = 0; i < (1 << N); i++) {
		int cnt = 0;
		for (int j = 0; j < N; j++) {
			if (checkSetBit(i, j) == 1) {
				cnt += arr[j];
			}
		}
		if (cnt == K) return true;
	}
	return false;
}
```
