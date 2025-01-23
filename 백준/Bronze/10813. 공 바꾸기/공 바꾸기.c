#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int main() {
	int N, M;
	scanf("%d %d", &N, &M);
	int* arr = (int*)malloc((N+1) * sizeof(int));

	// 바구니 초기화
	for (int i = 1; i <= N; i++) {
		arr[i] = i;
	}

	// 공 바꾸기
	for (int i = 0; i < M; i++) {
		int b1, b2;
		scanf("%d %d", &b1, &b2);
		int temp = arr[b1];
		arr[b1] = arr[b2];
		arr[b2] = temp;
		//printf("바뀐 공 출력: %d-> %d, %d-> %d\n", b1, arr[b1], b2, arr[b2]);
	}

	// 공 출력
	for (int i = 1; i <= N; i++) {
		printf("%d ", arr[i]);
	}

	free(arr);
	return 0;
}