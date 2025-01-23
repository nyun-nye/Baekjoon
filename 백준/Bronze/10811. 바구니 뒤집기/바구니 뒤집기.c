#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

// 바구니 바꾸는 함수
void change(int start, int end, int* arr) {
	int tmp = arr[start];
	arr[start] = arr[end];
	arr[end] = tmp;
}

int main() {
	int basket[101];
	int N, M;
	scanf("%d %d", &N, &M);
	// 바구니 초기화
	for (int i = 1; i <= N; i++) {
		basket[i] = i;
	}

	for (int i = 0; i < M; i++) {
		int start, end;
		scanf("%d %d", &start, &end);

		int routine = (end - start + 1)/2;
		
		for (int j = 0; j < routine; j++) {
			change(start++, end--, basket);
		}
	}

	for (int i = 1; i <= N; i++) {
		printf("%d ", basket[i]);
	}
}