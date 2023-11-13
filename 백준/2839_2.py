#시간초과가 떠서 input을 sys로바꿔주었다. 그냥 sys사용된건 다 input()이라 보면됨.
import sys 

N = int(sys.stdin.readline().rstrip())
result=0

while(N%5!=0 and N>0):
    N -= 3
    result += 1

print([result + int(N/5), -1][N < 0])