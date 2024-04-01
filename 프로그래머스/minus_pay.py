def solution(price, money, count):
    answer = 0

    for i in range(1, count+1):
        answer += price * i

    if answer < money:
        answer = 0
    else:
        answer = answer - money

    return answer

print(solution(3,20,4))
