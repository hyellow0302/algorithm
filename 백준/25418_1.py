import math
A, K = map(int, input().split())

queue = [A]
visitedRecord = set()
result = 0
node = 0
count = 0

while len(queue)!=0:
    node = queue.pop(0) # 맨 앞에 있는 원소 없애기 FIFO
    count += 1
    
    if node == K:
        result = round(math.log(count-1,2))
        break
    
    if node not in visitedRecord:
        visitedRecord.add(node)
        queue.append(node+1)
        queue.append(node*2)

print(result)