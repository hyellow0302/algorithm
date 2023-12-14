N, K = map(int, input().split())

array = [ i for i in range(1, N+1)]
# print(array)
count = 0
answer = []

while len(array)!=0:
    count+=K-1
    # print(count)
    if len(array) <= count:
        # print("count가 범위를 넘어섭니다.")
        count %= len(array)
    
    answer.append(array.pop(count))

print('<' + ', '.join(map(str, answer)) + '>')
