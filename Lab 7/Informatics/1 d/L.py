n = int(input())
a = list(map(int, input().split()))
w = int(input())
for i in range(n-1, -1, -1):
    if a[i] >= w:
        print(i+2)
        break
    elif i == 0:
        print(1)