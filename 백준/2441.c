#include <stdio.h>

int main(void) {
	int N;

	scanf("%d", &N);

	for (int i = 0; i < N; i++) {
		if (i == 0) {}
		else {
			for (int k = 0; k < i; k++) {
				printf(" ");
			}
		}
		for (int j =0; j<N-i; j++) {
			printf("*");
		}
		printf("\n");
	}

	return 0;
}