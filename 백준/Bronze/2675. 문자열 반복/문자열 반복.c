#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
	int testCaseNum;
	scanf("%d", &testCaseNum);

	for (int i = 0; i < testCaseNum; i++) {
		int routineNum;
		char word[20];
		scanf("%d %s", &routineNum, word);
		for (int j = 0; j < strlen(word); j++) {
			for (int k = 0; k < routineNum; k++) {
				printf("%c", word[j]);
			}
		}
		printf("\n");
	}

	return 0;
}