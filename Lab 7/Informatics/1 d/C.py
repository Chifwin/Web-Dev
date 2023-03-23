n = int(input())
a = list(map(int, input().split()))
print(sum(i > 0 for i in a))