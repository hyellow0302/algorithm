# 쏘카 코테
import re # 입력형태 맞추기위해 정규표현식 쓸거임...

# 1-1. 입력받아 이차원배열로 만들어주는 과정
stringArr = str(input())
number = re.findall(r'\d{1,2}', stringArr)
rows = int((len(number))/4)
rectanger = []
for i in range(rows):
    arr = []
    for j in range (4):
        arr.append(number[int(i)*4+int(j)])
    rectanger.append(arr)
# print(rectanger) # 입력 잘 받은거 확인함

# 1-2. 다시 순서대로 출력하기위해 이차원배열마다 key값 부여하려했으나.. 이차원배열로 접근하기가 어려워져 그냥 0번째 인덱스에 값 추가 
for k in range(len(rectanger)):
    rectanger[k].insert(0, k)
#print(rectanger)

# 2. y1 순서대로 배열 정렬 (인덱스대로 사각형에 알파벳을 부여하는 것)
rectanger.sort(key=lambda x: (x[2],x[1]))
#print(rectanger)

# 3-1. y1이 제일 낮은 삼각형 A는 y1만큼 내려올 수 있음
down = int(rectanger[0][2])
rectanger[0][2] = int(rectanger[0][2]) - down
rectanger[0][4] = int(rectanger[0][4]) - down
#print(rectanger)

# 3-2. 이제 나머지도 내렸을때 겹치는게 있는지 확인하면서 마지막 사각형까지 내려줌
# 사각형 개수만큼 반복
for i in range (1, int(len(rectanger))):
    max = 0
    count = 1
    # 겹치지않게 내리기위해 앞 리스트들과 모두 비교
    for j in range (1, i+1):
        if int(rectanger[i-j][1]) < int(rectanger[i][1]) and int(rectanger[i-j][3]) > int(rectanger[i][1]): # 현재 사각형 아래에 본인보다 큰 사각형이 있는 경우
            if int(rectanger[i-j][4]) > max:
                down = int(rectanger[i][2]) - int(rectanger[i-j][4])
                rectanger[i][2] = int(rectanger[i][2]) - down
                rectanger[i][4] = int(rectanger[i][4]) - down
                max = int(rectanger[i-j][4])
                count = 0
        elif int(rectanger[i-j][3]) > int(rectanger[i][1]) or int(rectanger[i-j][1]) < int(rectanger[i][3]): # 현재 사각형 아래에 본인보다 작은 사각형이 있는 경우
            if int(rectanger[i-j][4]) > max:
                down = int(rectanger[i][2]) - int(rectanger[i-j][4])
                rectanger[i][2] = int(rectanger[i][2]) - down
                rectanger[i][4] = int(rectanger[i][4]) - down
                max = int(rectanger[i-j][4])
                count = 0
    if count == 1: # 밑에 아무것도 없는 경우
        down = int(rectanger[i][2])
        rectanger[i][2] = int(rectanger[i][2]) - down
        rectanger[i][4] = int(rectanger[i][4]) - down
print(rectanger)

# 4. x1 순서대로 배열 정렬 (인덱스대로 사각형에 알파벳을 부여하는 것)
rectanger.sort(key=lambda x: x[1])
#print(rectanger)

# 5-1. x1이 제일 작은 삼각형은 x1만큼 왼쪽으로 이동할 수 있습니다.
left = int(rectanger[0][1])
rectanger[0][1] = int(rectanger[0][1]) - left
rectanger[0][3] = int(rectanger[0][3]) - left
#print("제일 왼쪽에있는거 이동합니다람쥐 ~")
#print(rectanger)

# 5-2. 이제 나머지도 왼쪽으로 옮겼을때 겹치는게 있는지 확인하면서 마지막 사각형까지 옮겨준다.
# 사각형 개수만큼 반복
for i in range (1, int(len(rectanger))):
    min = 1000000
    # 겹치지않기위해 앞 리스트들과 모두 비교
    for j in range (1, i+1):
        if int(rectanger[i][1]) - int(rectanger[i-j][3]) > 0 : # 현재 사각형기준 왼쪽에 사각형이 존재하고, 그 사각형과의 거리가 있는 경우
            left = int(rectanger[i][1]) - int(rectanger[i-j][3]) 
            if left < min: # 최대한 왼쪽으로 가기 위해
                min = left
                rectanger[i][1] = int(rectanger[i][1]) - left
                rectanger[i][3] = int(rectanger[i][3]) - left
        elif int(rectanger[i][1]) - int(rectanger[i-j][3]) == 0: # 현재 사각형 기준 왼쪽에 사각형이 존재하지않거나, 딱 붙어있는 경우
            if int(rectanger[i][2]) > int(rectanger[i-j][4]): # 현재 사각형 기준 왼쪽에 사각형이 없나? 참: 없을경우 본인 x1만큼 땡김 / 거짓: 딱붙어있는 경우(움직이지않음)
                left = int(rectanger[i][1])
                rectanger[i][1] = int(rectanger[i][1]) - left
                rectanger[i][3] = int(rectanger[i][3]) - left
#print(rectanger)

# 6. 이제 다시 입력받았던 순서대로 정렬
rectanger.sort(key=lambda x: x[0])
#print(rectanger)

# 7. 문자열로 다 통일시켜주고, 0번째 인덱스값 넣어줬던 것 제거
for i in range (int(len(rectanger))):
    del rectanger[i][0]
    rectanger[i] = list(map(str, rectanger[i]))

# 8. 문자열로 묶어주고, 리스트에 넣어 출력
result = []
for i in range (int(len(rectanger))):
    str = ' '.join(s for s in rectanger[i])
    result.append(str)

print(result)