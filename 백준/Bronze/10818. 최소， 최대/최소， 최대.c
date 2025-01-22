#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int main() {
	int N;
	scanf("%d", &N);
	int* arr = (int*)malloc(N * sizeof(int));

	for (int i = 0; i < N; i++) {
		scanf("%d", &arr[i]);
	}
	int min = arr[0], max = arr[0];

	for (int i = 0; i < N; i++) {
		if (arr[i] >= max) {
			max = arr[i];
		}
		else if (arr[i] <= min) {
			min = arr[i];
		}
	}
	printf("%d %d", min, max);

	return 0;
}