def min(a, b, c, d):
    mn = a
    for i in (b, c, d):
        if mn > i:
            mn = i
    return mn
a = map(int, input().split())
print(min(*a))