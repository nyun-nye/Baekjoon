#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int main() {
	int N;
	int X;
	scanf("%d %d", &N, &X);
	int* arr = (int*)malloc(N * sizeof(int));
	int count = 0;

	for (int i = 0; i < N; i++) {
		scanf("%d", &arr[i]);
	}

	for (int i = 0; i < N; i++) {
		if ((arr[i] < X) && (count == 0)) {
			printf("%d", arr[i]);
			count++;
		}
		else if((arr[i]<X)&&(count==1))
			printf(" %d", arr[i]);
	}
}