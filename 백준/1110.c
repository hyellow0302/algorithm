#include <stdio.h>

int main(void) {
	int N;
	int newNumber=0;
	int originNumber;
	int count = 0;

	scanf("%d", &N);
	originNumber = N;

	if (originNumber == 0) {
		count++;
	}

	while (newNumber != N) {
		if (originNumber < 10) {
			newNumber = originNumber*10 + originNumber;
		}
		else{
			newNumber = ((originNumber % 10) * 10) + (((originNumber/ 10) + (originNumber % 10)) % 10);//���� ���� ���� ������ �ڸ� ��
		}
		originNumber = newNumber;
		count++;
		//printf("%d\n", originNumber);
	}

	printf("%d\n", count);

	return 0;
}
