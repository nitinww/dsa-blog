---
title: Session 10
date: "2023-07-12"
---

<!-- %% 12/07/2023 %% -->

#### find sqrt(n)

```c++
int sqrt(int n) {
	int l = 1, h = n;
	while (l <= h) {
		int m = (l + h) / 2;
		if (m * m == n) return m;
		else if (m * m < n) l = m + 1;
		else h = m - 1;
	}
	return -1;
}
```

#### find minimum time taken to finish all the tasks by dividing all tasks

```c++
int ans = INT_MAX;
void solve(int arr[], int n, int k, int mx, int idx) {
	if (k == 1 || idx == n) {
		mx = max(mx, sumArr(arr, idx, n));
		ans = min(ans, mx);
		return;
	}
	int count = 0;
	for (int i = idx; i < n; i++) {
		cnt += arr[i];
		mx = max(mx, cnt);
		solve(arr, n, k - 1, mx, i + 1);
	}
}
```
