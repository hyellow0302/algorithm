#include <stdio.h>
#include <string.h>

int main(void) {
	int nH, nM, nS;
	int sH, sM, sS;
	int H=0, M=0, S=0;

	scanf("%2d:%2d:%2d", &nH, &nM,&nS);
	scanf("%2d:%2d:%2d", &sH, &sM, &sS);
	//printf("%d %d %d", nH, nM, nS);

	if (sS - nS < 0) {
		if (sM - 1 < 0) {
			sH -= 1;
			sM = 59;
			sS += 60;
			S = sS - nS;
		}
		else {
			sM -= 1;
			sS += 60;
			S = sS - nS;
		}
	}
	else {
		S = sS - nS;
	}
	
	//printf("S일단 계산 끝, %02d %02d %02d\n", sH, sM, S);

	if (sM - nM < 0) {
		sH -= 1;
		sM += 60;
		M = sM - nM;
	}
	else {
		M = sM - nM;
	}

	//printf("M 일단 계산 끝, %02d %02d %02d\n", sH, M, S);

	if (sH - nH < 0) {
		H = 24 - (nH - sH);
	}
	else {
		H = sH - nH;
	}

	printf("%02d:%02d:%02d", H, M, S);

	return 0;
}