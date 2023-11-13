a = {}
N = int(input()) # 몇개 입력받을징
originArr = list(map(int, input().split())) #그리고 리스트안에 채울것들도 입력받구
zipArr = sorted(list(set(originArr))) # 이제 그걸 중복처리와 정렬을 해준당

# zipArr의 값과 인덱스를 딕셔너리로 a로 매칭해서 만들어줌
for i in range(len(zipArr)):
    a[zipArr[i]]=i

# originArr의 요소와 a의 key값을 비교한뒤 일치할 경우 요소에 a의 value값을 넣어준다람지
for j in range (len(originArr)):
    if originArr[j] in a:
        key = originArr[j]
        originArr[j] = a[key]

# 이제 완성된 리스트 출력
for k in originArr:
    print(k, end=' ')
