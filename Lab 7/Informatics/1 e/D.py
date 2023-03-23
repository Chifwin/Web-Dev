def Election(x, y, z):
    return x + y + z > 1
print(int(Election(*map(int, input().split()))))