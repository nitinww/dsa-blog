---
title: Session 12
date: "2023-07-26"
---

### Sum of maximum subarray

- arN: 0 3 2 5 -1 4 6 -5 8
- total number of sub arrays - n \* (n + 1) / 2
- subsets - a ^ N
  - not continguous
  - order of elements doesn't matter
  - no duplicates
- subsequences - a ^ N
  - order of elements will matter
  - duplicates
- brute force

```cpp
int maxSubArraySum(int[] arr, int N) {
	int ans = INT_MIN;
	for (int i = 0; i < N; i++) {
		for (int j = i; j < N; j++) {
			int sum = 0;
			for (int k = i; k <= j; k++) {
				sum += arr[k];
			}
			ans = max(ans, sum);
		}
	}
	return ans;
}
```

- carry forward

```cpp
int maxSubArraySum(int[], arr, int N) {
	int ans = INT_MIN;
	for (int i = 0; i < N; i++) {
		int sum = 0;
		for (int j = 0; j < N; j++) {
			sum += arr[j];
			ans = max(ans, sum);
		}
	}
	return ans;
}
```

### Longest Increasing Subsequence

```
bool valid(int i, int[] arr, int N) {
	int prev = INT_MIN;
	for (int j = 0; j < N; j++) {
		if (checkBit(i, j)) {
			if (arr[j] < prev) return false;
			prev = arr[j];
		}
	}
	return false;
}
```

```
int solve(int arr[], int N, int idx, int prev) {
	if (idx == N) {
		return 1;
	}
	return solve(arr, N, idx + 1, prev) + (arr[idx] >= prev) ? solve(arr, N, idx + 1, arr[idx]) : 0;
}
```

### Find the length of longest subarray, whose elements when rearranged should form a continguous order

- arrN: 3 2 5 6 4 10 15 11 13 12 1 14

```
#include <bits/stdc++.h>
using namespace std;
int main() {
	int n;
	cin >> n;
	int arr[n];
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
	}
	int maxLen = INT_MIN;
	for (int i = 0; i < n; i++) {
		int maxw = INT_MIN, minw = INT_MAX;
		for (int j = i + 1; j < n; j++) {
			minw = min(minw, arr[j]);
            maxw = max(maxw, arr[j]);
            if (maxw - minw == j - i) {
            	maxLen = max(maxLen, j - i);
            }
		}
	}
	cout << maxLen << endl;
}
```

### find distinct elements in each windows of size k
