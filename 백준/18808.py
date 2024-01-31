import numpy as np

# N: 세로, M: 가로, K: 스티커의 개수
N, M, K = map(int, input().split())

stickers = []
sticker = []
squere = []
paper = []

# 모눈종이 만들기
for i in range(N):
    squere = []
    for j in range(M):
        squere.append(0)
    paper.append(squere)
# print(paper)

# 스티커 배열에 넣기
for i in range(K):
    height, width = map(int, input().split())
    idx = 0
    sticker=[]
    for j in range(height):
        row = list(map(int, input().split()))
        sticker.append(row)
        idx+=1
    stickers.append(sticker)
# print(stickers)

idx = 0
for k in paper:
    for l in k:
        if l==0:
            # 스티커 넣을 수 있는지 확인
            sticker = stickers.pop(0)
            height = len(sticker)
            width = len(sticker[0])
            print(height, width)

            copyPaper=np.array(paper)

            print(idx+height,l+width )
            if idx+height > len(paper) or l+1+width > len(paper[0]):
                print("범위를 넘어섭니다.")
                break

            include = 1 in copyPaper[idx:l+1][idx+height:l+1+width]
            print(include)
    idx+=1


