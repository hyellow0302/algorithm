N, S, M = map(int, input().split())
idx = nResult = sResult = mResult = 0
while True:
    idx +=1
    nResult +=1
    sResult +=1
    mResult +=1
    if nResult>15: nResult-=15
    if sResult>28: sResult-=28
    if mResult>19: mResult-=19
    if N==S and S==M:
        print(N)
        break
    elif nResult==N and sResult==S and mResult==M:
        print(idx)
        break
