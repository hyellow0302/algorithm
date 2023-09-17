N=int(input())

helloList={}

cnt=0

for _ in range(N):
    Input=input()

    if Input=="ENTER":
        for key,value in helloList.items():
            if value==1:
                cnt+=1
        helloList={}
    else:
        if Input not in helloList:
            helloList[Input]=1

for key,value in helloList.items():
    if value==1:
        cnt+=1

print(cnt)