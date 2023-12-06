def complexDFS(line, idx):
    global count
    # print(line, idx)
    # print(house)
    if line >= complex or line < 0 or idx >= complex or idx < 0: 
        return
    if house[line][idx] != '1':  # 문자열 '1'과 비교
        return
    if house[line][idx] == '1':
        # print("1이네요")
        house[line][idx] = '0'  # 문자열 '0'으로 변경
        count += 1
        # print("count 추가", count)
        complexDFS(line + 1, idx)  # 괄호 수정
        complexDFS(line - 1, idx)
        complexDFS(line, idx + 1)
        complexDFS(line, idx - 1)
    return count

complex = int(input())
house = []
answer = []
count = 0

for i in range(complex):    
    row = list(input())
    house.append(row)

for j in range(complex):
    for k in range(complex):
        if house[j][k] == '1':  # 문자열 '1'과 비교
            count = 0  # 카운트 초기화
            answer.append(complexDFS(j, k))

answer.sort()
answer.insert(0, len(answer))

for item in answer:
    print(item)
