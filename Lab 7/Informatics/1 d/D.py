n = int(input())
a = list(map(int, input().split()))
print(sum(a[i+1] > a[i] for i in range(n-1)))