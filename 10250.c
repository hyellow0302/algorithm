#include <stdio.h>

int main(void) {
	int TestCase;
	int H, W, N;
	int ho = 0;//호실
	int floor = 0;//층수

	scanf("%d", &TestCase);

	for (int i = 0; i < TestCase; i++) {
		scanf("%d %d %d", &H, &W, &N);
		floor = N % H;
		ho = (N / H) + 1;
		if (floor == 0) {//꼭대기 층일 경우!
			floor = H;
			ho -= 1;
		}
		if (ho < 10) {//10보다 작을시 1203호를 123호로 출력하지않기위해 후처리!
			floor *= 10;
		}
		printf("%d%d\n", floor, ho);
	}

	return 0;
}