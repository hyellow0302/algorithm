M = int(input())
N = int(input())
Array=[]


for j in range(M, N+1):#(M,N)을 했을경우에는 M이상 N미만을 뜻함... 
    count=0
    for i in range(2, j+1):
        if j%i==0:
            count += 1
    if count==0:
        Array.append(j)

if len(Array)==0:
    print(-1)
else :
    print(sum(Array))#sum함수 썻음!
    print(min(Array))#min함수 썻음!