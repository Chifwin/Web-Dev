def xor(x, y):
    return int((x or y) and not(x and y))
print(xor(*map(int, input().split())))