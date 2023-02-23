#2525.py~
A, B = map(int, input().split())
C = int(input())
S = A
M = B+C#40
if M>=60:
    S+=M/60
    M%=60#40
    if S>=24:
        S-=24
print(str(int(S))+" "+str(M))