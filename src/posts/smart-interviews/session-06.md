---
title: Session 06
date: "2023-05-17"
---

<!-- %% 17/05/2023 %% -->

## TOH

```
void TOH(int n, char src, char dest, char temp) {
	if (n == 0) return;
	TOH(n - 1, src, temp, dest);
	cout << src -> dest;
	TOH(n - 1, temp, dest, src);
}
```

## subset sum

```
bool subsetSum(int arr[], int k, int n; int s, int idx) {
	if (k == s) return true;
	if (idx == n || k < s) return false;
	if (subsetSum(arr, k, n, s += arr[i], idx + 1)) return true;
	if (subsetSum(arr, k, n, s, idx + 1)) return true;
	return false;
}
```

```
bool subsetSum(int i, int arr[], int k, int n, int s) {
	if (i == n) retrun s == k;
	return (subsetSum(i + 1, arr, k, n, s + arr[i]) || subsetSum(i + 1, arr, k, n, s));
}
```

```
bool subsetSum(int arr[], int k, int n) {
	if (n < 0) return k == 0;
	return (subsetSum(arr, k - arr[i], n - 1) || subsetSum(arr, k, n - 1));
}
```

## given n print valid parenthesis of length N

```
void generate(string s, int open, int close) {
	if (open == 0 && close == 0) {
		cout << s << endl;
		return;
	}
	if (0 < open) {
		generate(s += "(", n, idx + 1, o + 1, c);
	}
	if (0 < c && c < n) {
		generate(s += ")", n, idx + 1, o, c + 1);
	}
}
```

## generate all magic squares find the cost & keep track of minimum cost

- 3/51840 :)

```
void permute(int arr[], bool used[], int idx) {
	if (idx == 9) {
		if (isMagic(arr) == true) {
			min_cost = min(min_cost, cost(arr));
		}
	}

	for (int i = 1; i <= 9; i++) {
		if (used[i] == false) {
			arr[idx] = i;
			used[i] = true;
			permute(arr, used, idx + 1);
			used[i] = false;
		}
	}

	return min_cost;
}
```
