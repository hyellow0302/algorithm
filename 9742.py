import itertools
while True:
    try:
        array, idx = input().split()
        idx = int(idx)
        array_list = list(array)
        try:
            per = list(itertools.permutations(array_list, len(array)))
            result = ''.join(per[idx-1])
            print(str(array)+" "+str(idx)+" "+"="+" "+result)
        except:
            print(str(array)+" "+str(idx)+" "+"="+" "+"No permutation")
    except:
        break