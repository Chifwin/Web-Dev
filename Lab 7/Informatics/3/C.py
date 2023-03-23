a, b = map(int, (input() for _ in range(2)))
print(" ".join(str(i) for i in range(a, b+1) if int(i**0.5)**2 == i))