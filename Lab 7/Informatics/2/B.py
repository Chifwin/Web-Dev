n = int(input())
print("YES" if (not n%4 and (not n%400 or n%100)) else "NO")