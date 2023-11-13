// 문제가.. 문제를 이해못함 ㅠ
#include <stdio.h>

int main(void) {
	int Tree = 64;
	int X, rTree;
	int newTree = 0;
	int count = 0;
	
	scanf("%d", &X);
	printf("%d\n", X);

	if (Tree == X) count = 1;

	while (Tree != X) {
		count++;
		if (Tree > X) {
			rTree = (Tree / 2);
			if (rTree >= X) {
				Tree = rTree;
			}
			else {
				Tree = rTree + (rTree / 2);
			}
		}
		printf("%d\n", Tree);
		printf("%d\n", count);
	}

	return 0;
}
