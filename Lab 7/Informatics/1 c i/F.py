a = input()
flag = True
for i in a[::-1]:
    if flag and i == '0':
        continue
    flag = False
    print(i, end="")
if flag:
    print(0)