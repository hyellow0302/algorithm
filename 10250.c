#include <stdio.h>

int main(void) {
	int TestCase;
	int H, W, N;
	int ho = 0;//ȣ��
	int floor = 0;//����

	scanf("%d", &TestCase);

	for (int i = 0; i < TestCase; i++) {
		scanf("%d %d %d", &H, &W, &N);
		floor = N % H;
		ho = (N / H) + 1;
		if (floor == 0) {//����� ���� ���!
			floor = H;
			ho -= 1;
		}
		if (ho < 10) {//10���� ������ 1203ȣ�� 123ȣ�� ��������ʱ����� ��ó��!
			floor *= 10;
		}
		printf("%d%d\n", floor, ho);
	}

	return 0;
}