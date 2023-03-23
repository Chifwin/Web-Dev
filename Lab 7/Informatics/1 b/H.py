a = list(map(int, (input() for _ in range(4))))
print("YES" if abs(a[1] - a[3]) == abs(a[0] - a[2]) else "NO")