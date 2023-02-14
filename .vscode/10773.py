score = []

n=int(input())
add=0


for i in range (n):
    input_Score = int(input())
    if input_Score==0 and len(score)==0:
        print("0")
        break
    elif input_Score==0:
        remove = score.pop()
        add -= remove
    else:
        score.append(input_Score)
        add+=input_Score

print(add)
    
    
