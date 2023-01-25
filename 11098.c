#include <stdio.h>
#include <string.h>

int main(void) {
	int n; 
	int p;

	scanf("%d", &n); // 첫번째 줄 n 받기

	for (int i = 0; i < n; i++){//케이스의 개수만큼 돌기
		scanf("%d", &p); //선수 몇명인지 받기

		int moneyList[100];
		char playerList[21];
		char result[21];
		int temp = 0;

		for (int j = 0; j < p; j++) {//선수 각각 입력받기
			scanf("%d %s", &moneyList[j],playerList);

			if (temp < moneyList[j]) {//선수 max값 찾기
				temp = moneyList[j];
				strcpy(result, playerList);//result라는 배열에 playList배열을 복사
			}
		}
		printf("%s\n", result);//일단 i번째 케이스에서의 가장비싼선수 출력
	}

	return 0;
}