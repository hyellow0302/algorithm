#include <stdio.h>

int main(void) {
	int n, num, a[50] = { 0 };
	int i, j, temp;
	scanf("%d", &num);
	for (i = 0; i < num; i++)	scanf("%d", &a[i]);
	for (i = 0; i < num; i++) {
		for (j = 0; j < num - 1; j++) {
			if (a[j] > a[j + 1]) {
				temp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = temp;
			}
		}
	}
	n = a[0] * a[num - 1];
	printf("%d", n);
	return 0;
}
