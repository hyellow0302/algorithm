import sys 
result = {}
# 입력 구간
N = int(sys.stdin.readline().rstrip()) 
nArr = list(map(int,sys.stdin.readline().split()))
M = int(sys.stdin.readline().rstrip())
mArr = list(map(int,sys.stdin.readline().split()))

# 딕셔너리로 바꿈 (시간초과때문에)
for i in range(N):
    result[nArr[i]] = i
# print(result)

# 값 비교하고 0,1 넣어주기
for j in range(M):
    if mArr[j] in result:
        mArr[j] = 1
    else:
        mArr[j] = 0

# 마지막으로 출력!!
for k in mArr:
    print(k, end=" ")