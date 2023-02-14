cls = int(input())

for i in range(cls):
    score = []
    score = list(map(int,input().split()))
    del score[0]
    score.sort(reverse=True)
    #score = sorted(score, reverse=True)
    minn = str(min(score))
    maxx = str(max(score))
    resultMax = abs(int(score[0])-int(score[1]))
    for k in range(1, len(score)-1):
        isMax = abs(int(score[k])-int(score[k+1]))
        if resultMax < isMax:
            resultMax = isMax
    print("Class "+str(i+1))
    print("Max "+maxx+", "+"Min "+minn+", "+"Largest gap "+str(resultMax))
    