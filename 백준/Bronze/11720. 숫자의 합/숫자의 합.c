#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
	int N;
	char nums[100];

	scanf("%d", &N);
	scanf("%s", nums);

	int sum = 0;

	for (int i = 0; i < strlen(nums); i++) {
		sum += ((int)(nums[i])-48);
	}

	printf("%d", sum);

	return 0;
}