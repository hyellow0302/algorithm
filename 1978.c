#include <stdio.h>
#include <string.h>

int main(void) {
	int N;
	int number;
	int Array[101];
	int count = 0;

	scanf("%d", &N);

	for (int i = 0; i < N; i++) {
		scanf("%d", &Array[i]);
	}
	for (int j = 0; j < N; j++) {
		number = Array[j];
		if (number == 1) {}
		else if (number == 2) { count++; }
		else{
			for (int k = 2; k < number; k++) {
				//printf("%d %d ", number, k);
				if (number % k == 0) {
						break;
					}
				if (k == (number - 1)) {
					count++;
				}
			}
		}
		//printf("다음숫자드루와 \n");
	}
	printf("%d", count);
	return 0;
}