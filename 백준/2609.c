#include <stdio.h>

int main(void) {
	int a, b;
	int min, max;
	int GCD;//�ִ�����
	int LCM=0;//�ּҰ����
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
	//�ִ����� ���ϱ�
	for (int i = 1; i <= min; i++) {
		//printf("��� ���ϴ���..\n");
		if (min % i == 0) {
			if (max % i == 0) {
				GCD = i;
			}
		}
	}
	//printf("��� �ٱ���\n");

	while (LCM == 0) {
		//printf("��� ���ϴ���..\n");dprth
		if ((min * n) % max == 0) {
			LCM = min * n;
		}
		n++;
	}
	//printf("��� �ٱ���\n");

	printf("%d\n", GCD);
	printf("%d", LCM);
	return 0;
}