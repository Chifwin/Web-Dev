a = int(input())
for i in range(2, a+1):
    if not a%i:
        print(i)
        break