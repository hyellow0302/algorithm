#include <stdio.h>
#include <string.h>

int main(void) {
	int n; 
	int p;

	scanf("%d", &n); // ù��° �� n �ޱ�

	for (int i = 0; i < n; i++){//���̽��� ������ŭ ����
		scanf("%d", &p); //���� ������� �ޱ�

		int moneyList[100];
		char playerList[21];
		char result[21];
		int temp = 0;

		for (int j = 0; j < p; j++) {//���� ���� �Է¹ޱ�
			scanf("%d %s", &moneyList[j],playerList);

			if (temp < moneyList[j]) {//���� max�� ã��
				temp = moneyList[j];
				strcpy(result, playerList);//result��� �迭�� playList�迭�� ����
			}
		}
		printf("%s\n", result);//�ϴ� i��° ���̽������� �����Ѽ��� ���
	}

	return 0;
}