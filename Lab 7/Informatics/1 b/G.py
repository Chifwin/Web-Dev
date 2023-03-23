a = list(map(int, (input() for _ in range(4))))
print("YES" if a[1] == a[3] or a[0] == a[2] else "NO")