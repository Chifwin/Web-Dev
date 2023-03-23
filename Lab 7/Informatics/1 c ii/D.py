n = int(input())
x = 1
while x < n:
    x *= 2
if x >= n:
    print("YES" if x == n else "NO")