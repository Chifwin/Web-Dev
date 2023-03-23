n = int(input())
for i in range(1, n+1):
    print(" ".join(str(i) for _ in range(min(i, n - i*(i-1)//2))), end=' ')