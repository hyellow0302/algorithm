#include <stdio.h>

int main(void) {
	int T;
	int Array[10];
	int min = 0;

	scanf("%d", &T);

	for (int i = 0; i < T; i++) {
		for (int t = 0; t < 10; t++) {
			scanf("%d ", &Array[t]);
		}
		for (int j = 0; j < 10; j++) {
			for (int k = 0; k < 9; k++) {
				if (Array[k] > Array[k + 1]) {
					int temp = Array[k];
					Array[k] = Array[k + 1];
					Array[k + 1] = temp;
				}
			}
		}
		printf("%d\n", Array[7]);
	}

	return 0;
}