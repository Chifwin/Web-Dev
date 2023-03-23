n = int(input())
cnt = 1
a, b = 0, 1
while b < n:
    a = a + b
    a, b = b, a
    cnt += 1
print(-1 if b > n else cnt)