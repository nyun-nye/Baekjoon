#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int N;
	int P[1000];
	int check[1000];
	int sum = 0;
	int total = 0;
	int count = 0;
	int index = 0;

	// 사람 수 받기
	scanf("%d", &N);

	// 각 사람에 따른 시간 받기 + check 배열 초기화
	for (int i = 0; i < N; i++) {
		scanf("%d", &P[i]);
		check[i] = 0;
	}

	while (count < N) {
		++count;
		int min = 1000;
		for (int i = 0; i < N; i++) {
			if ((min > P[i]) && (check[i] == 0)) {
				min = P[i];
				index = i;
			}
		}
		check[index] = 1;
		sum += min;		
		total += sum;
	}

	printf("%d", total);
}
