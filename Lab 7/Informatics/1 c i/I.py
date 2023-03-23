a = int(input())
cnt = 0
for i in range(1, int(a**0.5)+1):
    if not a%i:
        cnt += 2
        if a/i == i:
            cnt -= 1
print(cnt)