#시간초과가 떠서 input을 sys로바꿔주었다. 그냥 sys사용된건 다 input()이라 보면됨.
import sys 

zN = int(sys.stdin.readline().rstrip())

a = []
num = 0

for i in range(N):
	a.append(int(sys.stdin.readline().rstrip()))

if N==0: num=1
else: 
    for j in range(len(a)):
        num+=a[j]-1
    num += 1
print(num)