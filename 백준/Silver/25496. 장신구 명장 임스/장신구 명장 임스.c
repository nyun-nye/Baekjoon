#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int asc(const int* a, const int* b) {
	return *a - *b; // 오름차순
}

int main() {
	int P, N;
	scanf("%d %d", &P, &N);

	int A[1000];
	for (int i = 0; i < N; i++) {
		scanf("%d", &A[i]);
	}

	qsort(A, N, sizeof(int), asc);

	int index = 0;

	while (P<200 && index<N) {
		P += A[index++];
	}

	printf("%d", index);
}