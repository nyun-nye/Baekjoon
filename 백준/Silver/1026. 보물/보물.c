#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int asc(const int* a, const int* b) {
	return *a - *b; // 오름차순
}

int dsc(const int* a, const int* b) {
	return *b - *a; // 내림차순
}

int main() {
	int N;
	int A[50];
	int B[50];
	int S = 0;

	scanf("%d", &N);
	for (int i = 0; i < N; i++) {
		scanf("%d", &A[i]);
	}
	for (int i = 0; i < N; i++) {
		scanf("%d", &B[i]);
	}

	qsort(A, N, sizeof(int), asc);
	qsort(B, N, sizeof(int), dsc);

	for (int i = 0; i < N; i++) {
		S += (A[i] * B[i]);
	}

	printf("%d", S);
}