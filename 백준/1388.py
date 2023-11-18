def create_2d_array(n, m):
    # 빈 2차원 배열 생성
    array = [['0' for _ in range(m)] for _ in range(n)]
    
    for i in range(n):
        row_input = input()
        
        # 입력한 문자열을 한 글자씩 나누어 배열에 저장
        array[i] = list(row_input)

    return array

# 이어지는건 전부 True로 만들자!
def widthDFS(nodeX, nodeY):
    if(nodeX < 0 or nodeX >= m): return
    if(visitedRecord[nodeY][nodeX] == True): return
    if(Floor[nodeY][nodeX] == '|'): return
    
    visitedRecord[nodeY][nodeX] = True
    widthDFS(nodeX-1, nodeY)
    widthDFS(nodeX+1, nodeY)

    return 0

def heightDFS(nodeX, nodeY):
    if(nodeY < 0 or nodeY >= n): return
    if(visitedRecord[nodeY][nodeX] == True): return
    if(Floor[nodeY][nodeX] == '-'): return

    visitedRecord[nodeY][nodeX] = True
    heightDFS(nodeX, nodeY-1)
    heightDFS(nodeX, nodeY+1)

    return 0

n, m = map(int, input().split())
Floor = create_2d_array(n, m)
visitedRecord = [[False for _ in range(m)] for _ in range(n)]
nodeX = 0
nodeY = 0
count = 0

# 타일 하나 하나 돌기
for j in range(n):
    for k in range(m):
        if(visitedRecord[j][k] == True):
            continue
        else:
            nodeX = k
            nodeY = j
            count += 1
            if(Floor[j][k] == '-'):
                widthDFS(nodeX, nodeY)
            elif(Floor[j][k] == '|'):
                heightDFS(nodeX, nodeY)

print(count)