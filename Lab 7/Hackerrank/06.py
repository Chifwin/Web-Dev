# https://www.hackerrank.com/challenges/piling-up/problem
t = int(input())
for _ in range(t):
    n = int(input())
    ar = list(map(int, input().split()))
    mn = ar.index(min(ar))
    ans = all(ar[i] >= ar[i+1] for i in range(mn-1)) and all(ar[i] >= ar[i-1] for i in range(mn+1, n))
    print("Yes" if ans else "No")