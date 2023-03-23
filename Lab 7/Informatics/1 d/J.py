n = int(input())
a = list(map(int, input().split()))
mx = a[0]
for i in a:
    if i > mx:
        mx = i
print(mx)