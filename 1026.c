#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b);

int main(void) {
	int N;
	int Aarray[50];
	int Barray[50];
	int S = 0;

	scanf("%d", &N);

	for (int i = 0; i < N; i++) {
		scanf("%d", &Aarray[i]);
	}
	for (int j = 0; j < N; j++) {
		scanf("%d", &Barray[j]);
	}
	
	qsort(Aarray, N, sizeof(Aarray[0]), compare);
	qsort(Barray, N, sizeof(Barray[0]), compare);

	for (int i = 0; i < N; i++) {
		S += Aarray[i] * Barray[N-1-i]; 
	}
	printf("%d", S);
	return 0;
}

int compare(const void* a, const void* b)
{
	if (*(int*)a > * (int*)b)

		return 1;

	else if (*(int*)a < *(int*)b)

		return -1;

	else

		return 0;
}