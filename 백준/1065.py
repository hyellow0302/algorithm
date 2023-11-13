N, idx= int(input()), 99
if N<100: print(N)
else:
    for i in range(100, N+1):
        first = i//100 - ((i%100)//10)
        second = ((i%100)//10) - i%10
        if first == second: idx+=1 # print(str(first)+"와"+str(second)+",그래서 결국 "+str(i))
    print(idx)