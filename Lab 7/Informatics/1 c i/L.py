a = input()
ans = 0
for i in a:
    ans *= 2
    if i == '1':
        ans += 1
print(ans)