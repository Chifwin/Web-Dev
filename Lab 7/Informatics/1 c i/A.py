a, b = map(int, (input() for _ in range(2)))
print(" ".join(str(i) for i in range(a + a%2, b+1, 2)))