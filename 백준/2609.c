#include <stdio.h>

int main(void) {
	int a, b;
	int min, max;
	int GCD;//최대공약수
	int LCM=0;//최소공배수
	int n = 1;

	scanf("%d %d", &a, &b);

	if(a>b){
		min = b;
		max = a;
	}
	else {
		min = a;
		max = b;
	}
	//최대공약수 구하기
	for (int i = 1; i <= min; i++) {
		//printf("약수 구하는중..\n");
		if (min % i == 0) {
			if (max % i == 0) {
				GCD = i;
			}
		}
	}
	//printf("약수 다구함\n");

	while (LCM == 0) {
		//printf("배수 구하는중..\n");dprth
		if ((min * n) % max == 0) {
			LCM = min * n;
		}
		n++;
	}
	//printf("배수 다구함\n");

	printf("%d\n", GCD);
	printf("%d", LCM);
	return 0;
}