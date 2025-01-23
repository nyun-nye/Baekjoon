#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int remainder[42] = {0};
	int counter = 0;

	// 나머지의 갯수 배열로 카운트
	for (int i = 0; i < 10; i++) {
		int x;
		scanf("%d", &x);
		remainder[x % 42]++;
	}

	for (int i = 0; i < 42; i++) {
		if (remainder[i] > 0)
			counter ++ ;
	}

	printf("%d", counter);
	return 0;
}