#include <stdio.h>

int main(void) {
	int n;
	char name[101][16];
	int year[101];
	int month[101];
	int day[101];
	int max, min;
	int Maxidx = 1, Minidx = 1;

	scanf("%d", &n);

	for (int i = 0; i < n; i++) {
		scanf("%s %d %d %d", &name[i], &day[i], &month[i], &year[i]);
	}

	min = year[0];

	for (int i = 1; i < n; i++) {
		if (min < year[i]) {
			//printf("연도로 보아, %s가 더 나이가 적네요\n", name[i]);
			min = year[i];
			Minidx++;
		}
		else if (min == year[i]) {
			min = month[Minidx];
			if (min < month[i]) {
				//printf("월로 보아, %s가 더 나이가 적네요\n", name[i]);
				Minidx++;
				
			}
			else if (min == month[i]) {
				min = day[Minidx];
				if (min < day[i]) {
					//printf("일로 보아, %s가 더 나이가 적네요\n", name[i]);
					Minidx++;
				}
			}
			min = year[i];
		}
		//printf("현재최솟값은 %s\n", name[Minidx]);
	}

	max = year[0];

	for (int i = 1; i < n; i++) {
		if (max > year[i]) {
			//printf(" 연도로 보아, %s가 더 나이가 많네요\n", name[i]);
			max = year[i];
			Maxidx++;
		}
		else if (max == year[i]) {
			max = month[Maxidx];
			if (max > month[i]) {
				//printf("%d %d\n", max, month[i]);
				//printf("월로 보아, %s가 더 나이가 많네요\n", name[i]);
				Maxidx++;
			}
			else if (max == month[i]) {
				max = day[Maxidx];
				if (max > day[i]) {
					//printf("일로 보아, %s가 더 나이가 많네요\n", name[i]);
					Maxidx++;
				}
			}
			max = year[i];
		}
		//printf("현재최댓값은 %s\n", name[Maxidx]);
	}



	printf("%s\n", name[Minidx]);
	printf("%s", name[Maxidx]);
	
	return 0;
}