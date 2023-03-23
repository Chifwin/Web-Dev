a = list(map(int, (input() for i in range(4))))
for i in range(0, 1001):
    if not sum(a[-p-1]*i**p for p in range(4)):
        print(i, end=" ")