n = int(input())
a = []

for _ in range(n):
    x,y = input().split()
    x = int(x)
    a.append([x,y])

a.sort(key = lambda x : x[0])

for i in range(0,n):
    print(a[i][0],a[i][1])
