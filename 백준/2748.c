#include <stdio.h>

int main(void) {
	long long int n;
	long long int nArray[91];

	scanf("%lld", &n);

	for (int i = 1; i <=n+1; i++) {
		if (i == 1) {
			nArray[1] = 0;
		}
		else if (i == 2) {
			nArray[2] = 1;
		}
		else {
			nArray[i] = nArray[i - 1] + nArray[i - 2];
		}
	}

	printf("%lld", nArray[n+1]);

	return 0;
}