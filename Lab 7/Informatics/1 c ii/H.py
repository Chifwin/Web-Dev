n = int(input())
if n < 2:
    print(n)
else:
    cnt = 1
    a, b = 0, 1
    while cnt < n:
        a = a + b
        a, b = b, a
        cnt += 1
    print(b)