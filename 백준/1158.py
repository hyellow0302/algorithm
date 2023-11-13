import sys 

N, K = map(int, sys.stdin.readline().split())
# N, K = int(sys.stdin.readline().rstrip().split)

array = [ 0 for i in range(N+1)]
result = [ 0 for i in range(N) ]

# print(list(array)) # 1 2 3 4 5 6 7
# print(array)

count = 1
index = 0
deleteCount = 0

while(True):
    # print ("읭")
    if index > N-1:
        index = 0

    # print ("count: "+str(count))
    # print ("index: "+str(index))

    if array[index] != 1:
        if count==K: 
            # print("delete: "+str(index+1))
            result[deleteCount] = index+1
            deleteCount = deleteCount + 1
            array[index]=1
            count = 0
        count = count + 1
    index = index + 1

    if deleteCount == N:
        break 


# 출력 양식 대로 출력하기 위한거! 중요한건 아님
print("<", end="")
for i in range(N-1):
    print(result[i], end=", ")
print(result[N-1], end="")
print(">")
