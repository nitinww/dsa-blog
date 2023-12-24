---
title: Session 07
date: "2023-05-24"
---

<!-- %% 24/05/2023 %% -->

#### string partitioning

1. return true/false
2. no. of ways
3. minimum cuts

###### return true/false

```c++
bool partition(string s, vector<string> list, int idx) {
	for (int i = idx; i < s.size(); i++) {
		if (s.substr(idx, i) in list) {
			if (partition(s, list i + 1) == true) {
				return true;
			}
		}
	}
	return false;
}
```

###### no. of ways

```c++
bool partition(string s, vector<string> list, int idx, int &cnt) {
	if (idx == s.size()) {
		cnt++;
		return true;
	}
	for (int i = idx; i < s.size(); i++) {
		if (s.substr(idx, i) in list) {
			if (partition(s, list i + 1) == true) {
				return true;
			}
		}
	}
	return false;
}
```

```c++
int partition(s, list, idx) {
	if (idx == s.size()) return 1;
	int ways = 0;
	for (int i = idx; i < s.size(); i++) {
		if (s.substr(idx, i) in list) {
			ways += partition(s, list, i + 1);
		}
	}
	return ways;
}
```

###### minimum cuts

```c++
int min_val = 0;
int minWays(s, list, idx) {
	if (idx == s.size()) {
		min_val = min(min_val, cnt);
		return 1;
	}
	int cnt = 0;
	for (int i = idx; i < s.size(); i++) {
		if (s.substr(idx, i) in list) {
			if (partition(s, list, i + 1) == 1) {
				cnt++;
			}
		}
	}
	return 0;
}
```

## Sorting

#### bubble sort

```
for i = 0 to N - 1
	for j = 0 to N - i - 1
		if arr[j] > arr[j + 1]
			swap(arr[j], arr[j + 1])
```

#### selection sort

```
for i = 0 to N - 1
	min_idx = i
	for j = i to N
		if arr[j] < arr[min_idx]
			min_idx = i
		swap(arr[i], arr[min_idx])
```

#### insertion sort

```c++
void insertionSort(int arr[], int n) {
	for (int i = 0; i < n; i++) {
		w = arr[i];
		for (int j = i - 1; w < arr[i] && 0 <= j; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = w;
	}
}
```

#### count sort

```c++
void cntSort(int arr[], int n, int m) {
	int cnt[m + 1] = {0};
	for (int i = 0; i < n; i++) cnt[arr[i]]++;
	int k = 0;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < cnt[i]; j++) {
			arr[k++] = i;
		}
	}
}
```

```c++
void cntSort(int arr[], int n, int m) {
	// b -> max, a -> min
	int R = b - a + 1;
	int cnt[R] = {0};
	for (int i = 0; i < n; i++) cnt[arr[i] - a]++;
	int k = 0;
	for (int i = 0; i <= R; i++) {
		for (int j = 0; j < cnt[i]; j++) {
			arr[k++] = a + i;
		}
	}
}
```
