#include <stdio.h>

int main(void) {
	int Array[10];
	int N;
	int a = 0, b = 0;
	int count = 0;
	int max = 0;
	int temp = 0;

	scanf("%d", &N);

	a = N;

	while (a >= 10) {
		b = a;
		b = b % 10;
		Array[count] = b;
		a = a / 10;
		count++;
	}
	b = a;
	b = b % 10;
	Array[count] = b;

	//printf("%d", count);

	for (int i = 0; i < count+1; i++) {
		//printf("%d ", Array[i]);
		for (int j = 0; j < count; j++) {
			if (Array[j] < Array[j + 1]) {
				temp = Array[j];
				Array[j] = Array[j + 1];
				Array[j + 1] = temp;
			}
		}
	}

	for (int k = 0; k < count + 1; k++) {
		printf("%d", Array[k]);
	}

	return 0;
}