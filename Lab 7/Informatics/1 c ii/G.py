x, p, y = map(int, (input() for _ in range(3)))
x *= 100
p += 100
y *= 100

ans = 0
while x < y:
    x = x*p//100
    ans += 1
print(ans)