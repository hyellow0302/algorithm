S = input()
sList = set()

for i in range (len(S)):
    for j in range (i, len(S)):
        string = S[i:j+1]
        sList.add(string)

print(len(sList))
