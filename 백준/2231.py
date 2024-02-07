N = int(input())

for i in range(1, N+1):
    result = i + sum((map(int, str(i))))
    if(result == N):
        print(i)
        break
    if(i==N): print(0)
    


        


