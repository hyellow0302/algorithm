t = int(input())
for i in range(t):
    a,b = map(int,input().split())
    aa,bb = a,b
    a,b = min(a,b), max(a,b)
    while a != 0:
        b = b%a
        a,b = b,a
    print(aa * bb // b)