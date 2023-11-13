import math
n = 1
result = 0
while n!=0:
    result=0
    n=int(input())
    if n==1 or n==2:
        result = 1
    else:
        # 1. 
        # for i in range(n+1, 2*n):
        #     count = 0
        #     for j in range(2, i):
        #         if i%j == 0:
        #             count = 1
        #     if count == 0: result +=1

        # 2.
        # for i in range(n+1, 2*n):
        #     count = 0
        #     for j in range(2, int(math.sqrt(i)+1)):
        #         if i%j==0:
        #             count = 1
        #     if count == 0: result +=1

        # 3.
        a = [False, False] + [True]*(n-1)
        primes = []

        for i in range(2, int(math.sqrt(n)+1)):
    print(result)