#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <ctype.h> // toupper 사용 위함
#include <string.h> // strlen 사용 위함


int main() {
	char word[1000000];
	scanf("%s", word);
	int len = strlen(word);
	int string[26] = {0}; // 26개 알파벳
	int max=0;
	int count = 0;
	int index;
	
	for (int i = 0; i < len; i++) {
		word[i] = toupper(word[i]);
		string[word[i] - 'A']++;
	}
	for (int i = 0; i < 26; i++) {
		if (string[i] > 0 && max < string[i]) {
			max = string[i];
			index = i;
		}
	}
	for (int i = 0; i < 26; i++) {
		if (max == string[i])
			count++;
	}
	if (count > 1) {
		printf("?");
	}
	else {
		printf("%c", 'A' + index);
	}
}