N = int(input()) # 색종이의 개수
rows = 100
idx = 0
arr = [[0 for j in range(rows)] for i in range(rows)]

for i in range (N):
    a, b = map(int, input().split())
    for t in range (b, b+10):
        for r in range (a, a+10):
            arr[t][r] = 1

for j in range (rows):
    for k in range (rows):
        if arr[j][k]==1:
            idx+=1
            
print(idx)