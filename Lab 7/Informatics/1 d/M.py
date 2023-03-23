n, a, b, c, d = map(int, input().split())
ar = [i for i in range(1, n+1)]

a -=1
b -= 1
for i in range((b - a + 1)//2):
    ar[a+i], ar[b-i] = ar[b-i], ar[a+i]

c -=1
d -= 1
for i in range((d - c + 1)//2):
    ar[c+i], ar[d-i] = ar[d-i], ar[c+i]

print(" ".join(str(i) for i in ar))