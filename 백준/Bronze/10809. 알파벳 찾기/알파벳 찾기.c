#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
	/*char c = 'a'; // 97
	printf("%d", c);*/
	char S[100];
	char alphabet[26];
	for (int i = 0; i < 26; i++) {
		alphabet[i] = -1;
	}
	scanf("%s", S);

	for (int i = 0; i < strlen(S); i++) {
		if (alphabet[(int)(S[i]) - 97] == -1)
			alphabet[(int)(S[i]) - 97] = i;
	}

	for (int i = 0; i < 26; i++) {
		printf("%d ", alphabet[i]);
	}

	return 0;
}