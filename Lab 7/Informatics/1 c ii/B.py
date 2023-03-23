n = int(input())
x = 2
while x <= n:
    if n%x == 0:
        break
    x += 1
print(x)