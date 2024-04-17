x = int(input())
stick = 0
arr = [64, 32, 16,  8, 4, 2, 1]

while x != 0:
    for i in arr:
        if x >= i:
            x -= i
            stick += 1
            break

print(stick)