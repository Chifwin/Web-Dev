# https://www.hackerrank.com/challenges/no-idea/problem
n, m = map(int, input().split())
ar = map(int, input().split())
a = frozenset(map(int, input().split()))
b = frozenset(map(int, input().split()))
ans = 0
for i in ar:
    if i in a:
        ans += 1
    if i in b:
        ans -= 1
print(ans)