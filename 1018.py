rows, cols = map(int, input().split())
arr=[]
wArr=[['' for _ in range(8)] for _ in range(8)]
bArr=[['' for _ in range(8)] for _ in range(8)]
widx=bidx=idx=weight=height=0
min=2501
# W로 시작하는 배열 만들기
for i in range(0,8):
    for j in range(0,8):
        if(i%2==1):
            if(j%2==1): result = 'W'
            else: result = 'B'
            wArr[i][j] = result
        else:
            if(j%2==1): result = 'B'
            else: result = 'W'
            wArr[i][j] = result
# B로 시작하는 배열 만들기
for i in range(0,8):
    for j in range(0,8):
        if(i%2==1):
            if(j%2==1): result = 'B'
            else: result = 'W'
            bArr[i][j] = result
        else:
            if(j%2==1): result = 'W'
            else: result = 'B'
            bArr[i][j] = result
# 리스트 입력 받기
for k in range (rows):
    arr.append(list(str(input())))

print(arr)
print(wArr)
print(bArr)

for r in range(rows-7):#3
    for v in range(cols-7): #6
        for t in range(r, r+7):
            cIdx=0
            for b in range (v, v+7):
                rIdx=0
                if wArr[cIdx][rIdx] != arr[t][b]: 
                    widx+=1
                    print(arr[t][b]+" <W> r: "+str(r)+" v: "+str(v)+" t: "+str(t)+" b: "+str(b))
                if bArr[cIdx][rIdx] != arr[t][b]:
                    bidx+=1
                    print(arr[t][b]+"<B> r: "+str(r)+" v: "+str(v)+" t: "+str(t)+" b: "+str(b)+" ")
                rIdx += 1
            cIdx += 1
        print(str(widx)+" "+str(bidx))
        if widx > bidx: idx = bidx
        else: idx = widx
        if min > idx:
            min = idx
        widx=bidx=0

print(min)