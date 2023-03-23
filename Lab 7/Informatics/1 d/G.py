n = int(input())
a = list(map(int, input().split()))
# a = a[::-1]
for i in range(0, n//2):
    a[i], a[n - i - 1] = a[n - i - 1], a[i]
print(" ".join(str(i) for i in a))