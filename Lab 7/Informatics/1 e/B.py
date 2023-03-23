def pow(a, n):
    res = 1
    for i in range(n):
        res *= a
    return res
a = input().split()
print(pow(float(a[0]), int(a[1])))