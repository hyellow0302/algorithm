import math
N = int(input())
for i in range(N):
    a ,b = map(int, input().split())
    result = math.lcm(a, b)
    print(result)
