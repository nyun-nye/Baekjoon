#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int N;
	scanf("%d", &N);
	// 과목 점수 입력받기
	int subject[1000];
	for (int i = 0; i < N; i++) {
		int score;
		scanf("%d", &score);
		subject[i] = score;
	}
	// 최댓값 구하기
	int M=subject[0];
	for (int i = 0; i < N; i++) {
		if (subject[i] > M)
			M = subject[i];
	}
	//printf("%d", M);

	// 재계산하기
	double sum = 0.0;
	for (int i = 0; i < N; i++) {
		//printf("%d : %d\n", i, subject[i]);
		sum += ((double)subject[i] / M * 100.0);
		//printf("%d : %f\n", i, sum);
	}
	//printf("sum : %f\n", sum);

	printf("%f", sum / N);

	return 0;
}