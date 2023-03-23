n = int(input())
a = list(map(int, input().split()))
print("YES" if any((a[i] > 0) ^ (a[i+1] < 0) for i in range(n-1)) else "NO")