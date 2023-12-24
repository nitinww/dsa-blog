---
title: Session 08
date: "2023-05-31"
---

<!-- %% 31/05/2023 %% -->

#### merging two arrays

```c++
void merge(int a[], int b[]) {
	n = a.size();
	m = b.size();
	c[n + m];
	i = 0, j = 0, k = 0;
	while (i < n && j < m) {
		if (a[i] < b[j]) c[k++] = a[i++];
		else c[k++] = b[j++];
	}
	while (i < n) c[k++] = a[i++];
	while (j < m) c[k++] = b[i++];
}
```

#### merging to array with empty cells

```c++
void merge(int a[], int b[], int x, int y) {
	int k = a.size(), p = x + y;
	for (i = x - 1; 0 <= i; i--) {
		if (y) {
			if (a[p - 1] > b[y - 1]) {
				a[i] = a[p - 1];
				p--;
			} else {
				a[i] = b[y - 1];
				y--;
			}
		}
	}
}
```

#### sort 0's & 1's

```c++
// my code :)
void sort(int arr[], int n) {
	i = 0, j = n - 1;
	while (i <= j) {
		while (arr[i++] != '1') {}
		while (arr[j--] != '0') {}
		if (i < j) swap(arr[i++], arr[j--]);
	}
}
```

```c++
void sort(int arr[], int n) {
	i = 0, j = n - 1;
	while (i <= j) {
		if (arr[i] == '0') i++;
		if (arr[j] == '1') j--;
		if (arr[i] == 1 && arr[j] == 0 && i < j) {
			swap(arr[i], arr[j]);
			i++, j--;
		}
	}
}
```

#### inversion count

```c++
i < j -> count arr[i] > arr[j]
```

```c++
// brute force
for (int i = 0; i < n; i++) {
	for (int j = i + 1; j < n; j++) {
		if (arr[j] < arr[i]) cnt++;
	}
}
return c;
```

```c++
void mergeSort(int arr[], int l, int h) {
	if (l > h) return;
	int m = (l + h) / 2;
	mergeSort(arr, l, m);
	mergeSort(arr, m + 1, h);
	merge(arr, l, m, h);
}
void merge(int arr[], int l, int m, int h) {
	int temp[h - l + 1], cnt = 0;
	int p1 = l, p2 = m + 1, k = 0;
	while (p1 <= m && p2 <= h) {
		if (arr[p1] < arr[p2]) {
			temp[k++] = arr[p1++];
		} else {
			cnt += (m - p1 + 1);
			temp[k++] = arr[p2++];
		}
	}
	while (p1 <= m) temp[k++] = arr[p1++];
	while (p2 <= h) temp[k++] = arr[p2++];
	for (int i = 0; i < h - l + 1; i++) arr[l + i] = temp[i];
	return cnt;
}
```

#### merge sort

```c++
void mergeSort(int arr[], int l, int h) {
	if (l > h) return;
	int m = (l + h) / 2, cnt = 0;
	cnt += mergeSort(arr, l, m);
	cnt += mergeSort(arr, m + 1, h);
	cnt += merge(arr, l, m, h);
	return cnt;
}
void merge(int arr[], int l, int m, int h) {
	int temp[h - l + 1];
	int p1 = l, p2 = m + 1, k = 0;
	while (p1 <= m && p2 <= h) {
		if (arr[p1] < arr[p2]) temp[k++] = arr[p1++];
		else temp[k++] = arr[p2++];
	}
	while (p1 <= m) temp[k++] = arr[p1++];
	while (p2 <= h) temp[k++] = arr[p2++];
	for (int i = 0; i < h - l + 1; i++) arr[l + i] = temp[i];
}
```

#### two sum

```c++
bool solve(int arr[], int n, int k) {
	sort(arr, arr + n);
	int i = 0, j = n - 1;
	while (i <= j) {
		if (arr[i] + arr[j] == k) return true;
		else if (arr[i] + arr[j] < k) i++;
		else j--;
	}
	return false;
}
```
