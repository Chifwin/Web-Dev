n = int(input())
a = list(map(int, input().split()))
print(sum(a[i-1] < a[i] and a[i] > a[i+1] for i in range(1, n-1)))