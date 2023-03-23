a, b, c, d = map(int, (input() for _ in range(4)))
print(" ".join(str(i) for i in range(a, b+1) if i%d == c))