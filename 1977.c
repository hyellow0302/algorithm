#include <stdio.h>

int main(void) {
	int N, M;
	int min;
	int numberArray[100];
	int idx = 0;
	int add = 0;
	int number = 0;

	scanf("%d", &M);
	scanf("%d", &N);

	for (int j = M; j < N + 1; j++) {
		for (int i = 1; i <= 100; i++) {
			if (j/i==i&&j%i==0) {
				if (number != i * i) {
					//printf("%d  ", j);
					//printf("%d \n", i * i);
					numberArray[idx] = i * i;
					idx++;
					number = i * i;
				}
			}
		}
	}

	min = numberArray[0];
	//printf("%d\n", idx)
	if (idx == 0) {
		printf("-1");
	}
	else {
		for (int i = 1; i <= idx; i++) {
			add += numberArray[i-1];
			if (numberArray[i-1] < min) {
				min = numberArray[i + 1];
			}
		}
		printf("%d\n", add);
		printf("%d", min);
	}
	
	return 0;
}