N, K = map(int, input().split())

array = [ i for i in range(1, N+1)]
count = 0
answer = []

while len(array)!=0:
    count+=K-1
    if len(array) <= count:
        count %= len(array)
    
    answer.append(array.pop(count))

print('<' + ', '.join(map(str, answer)) + '>')
