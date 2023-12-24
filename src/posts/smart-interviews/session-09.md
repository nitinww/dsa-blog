---
title: Session 09
date: "2023-06-07"
---

<!-- %% 06/07/2023 %% -->

## Searching

#### Linear Search

```c++
bool LS(int arr[], int n, int k) {
	for (int i = 0; i < n; i++) {
		if (arr[i] == k) {
			return true;
		}
	}
	return false;
}
```

#### Binary Search

```c++
bool BSI(int arr[], int n, int k) {
	int l = 0, r = n - 1;
	while (l <= r) {
		m = (l + h) / 2;
		if (arr[m] == k) return true;
		else if (k < arr[m]) j = m - 1;
		else i = m + 1;
	}
	return false;
}
```

```c++
bool BSR(int arr[], int n, int k, int l, int h) {
	int m = (l + h) / 2;
	if (h < l) return false;
	if (arr[m] == k) return true;
	else if (k < arr[m]) return BSR(arr, n, k, l, m - 1);
	else return BSR(arr, n, k, m + 1, h);
}
```

#### Lower Bound

```c++
int lbound(int arr[], int n, int k) {
	int l = 0, h = n - 1, ans = INT_MIN;
	while (l <= h) {
		int m = (l + h) / 2;
		if (arr[m] == k) return arr[m];
		else if (k < arr[m]) h = m - 1;
		else l = m + 1, ans = arr[m];
	}
	return ans;
}
```

#### Upper Bound

```c++
int ubound(int arr[], int n, int k) {
	int l = 0, h = n - 1, ans = INT_MIN;
	while (l <= h) {
		int m = (l + h) / 2;
		if (arr[m] == k) return arr[m];
		else if (k < arr[m]) h = m - 1, ans = arr[m];
		else l = m + 1;
	}
	return ans;
}
```

#### First Occurrence

```c++
int firstIndex(int arr[], int n, int k) {
	int idx1 = 0, l = 0, h = n - 1;
	while (l <= h) {
		int m = (l + h) / 2;
		if (arr[m] == k) h = m - 1, idx1 = m;
		else if (k < arr[m]) h = m - 1;
		else l = m + 1;
	}
	return idx1;
}
```

#### Last Occurrence

```c++
int lastIndex(int arr[], int n, int k) {
	int idx2 = 0, l = 0, h = n - 1;
	while (l <= h) {
		int m = (l + h) / 2;
		if (arr[m] == k) l = m + 1, idx1 = m;
		else if (k < arr[m]) h = m - 1;
		else l = m + 1;
	}
	return idx2;
}
```

#### Count frequency of n

```c++
int idx1 = firstIndex(n);
int idx2 = lastIndex(n);
print(idx2 - idx1 + 1);
```
