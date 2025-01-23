#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
	char S[1000];
	int i;

	scanf("%s", S);
	scanf("%d", &i);

	printf("%c", S[i-1]);

	return 0;
}