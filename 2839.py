#시간초과가 떠서 input을 sys로바꿔주었다. 그냥 sys사용된건 다 input()이라 보면됨.
import sys 

N = int(sys.stdin.readline().rstrip())
result=0
A = N%5

if N==4 or N==7 :
    result = -1
else :
    if A==0:
        result = N/5
    elif A==1:
        result = N/5+1
    elif A==2:
        result = N/5+2
    elif A==3:
        result = N/5+1
    elif A==4:
        result = N/5+2

print(int(result))