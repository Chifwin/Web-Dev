a = list(map(int, (input() for i in range(5))))
cnt = 0
for i in range(0, 1001):
    if i != a[4] and not sum(a[-p-2]*i**p for p in range(4)):
        cnt += 1
print(cnt)